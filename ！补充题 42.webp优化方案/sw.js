seviceworker拦截

importScripts('https://xxx.com/workbox/4.3.1/workbox-sw.js');

// 异常处理
self.onerror = function () {
  caches.delete('xx:html');
  caches.delete('xx:static');
};

workbox.setConfig({ debug: false });
workbox.core.skipWaiting();
workbox.core.clientsClaim();

var CACHE_TYPES = ['style', 'script', 'image', 'font', 'video', 'audio', 'document'];
var STATIC_BLACKLIST = /test-/i;
var HTML_BLACKLIST = /(\/pandora\/)|(index.html)/i;
var FORMAT_IMG_BLACKLIST = ['.apng', '.ico'];
var DOCUMENT_EXPIRED = 'DOCUMENT_EXPIRED';
var SKIP_CACHE = /skip_service_worker/i;

//document失效，重新刷新页面
var updatesChannel = new BroadcastChannel(DOCUMENT_EXPIRED);
updatesChannel.addEventListener('message', function (event) {
  clients.matchAll().then(function (windows) {
    if (windows && windows.length) {
      windows.forEach(function (win) {
        win.postMessage('sw:reload')
      })
    };
  });
});

//容器内的document缓存
workbox.routing.registerRoute(
  function (options) {
    var request = options.event.request;
    var destination = request.destination;
    var url = request.url;
    var isDocument = destination === 'document';
    var userAgent = request.headers.get('User-Agent');
    var skipServiceWorker = SKIP_CACHE.test(url);

    // 只有在YPP容器内的document才缓存
    return (
      !skipServiceWorker &&
      isDocument &&
      options.url.host === self.location.host &&
      !HTML_BLACKLIST.test(url) &&
      isInYpp(userAgent)
    );
  },
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'bx:html',
    plugins: [
      new workbox.cacheableResponse.Plugin({
        statuses: [200], // 剔除重定向
      }),
      new workbox.broadcastUpdate.Plugin({
        channelName: DOCUMENT_EXPIRED,
        headersToCheck: ['ETag'], // 只通过ETag判断，而不是Content-Length、ETag和Last-Modified
        deferNoticationTimeout: 1, // document有变更的时候，立即重新刷新
      }),
    ],
  })
);

//== PC的document缓存
workbox.routing.registerRoute(
  function (options) {
    var request = options.event.request;
    var destination = request.destination;
    var url = request.url;
    var isDocument = destination === 'document';
    var userAgent = request.headers.get('User-Agent');
    var skipServiceWorker = SKIP_CACHE.test(url);

    return (
      !skipServiceWorker &&
      isDocument &&
      options.url.host === self.location.host &&
      !HTML_BLACKLIST.test(url) &&
      !isInMobile(userAgent)
    );
  },
  new workbox.strategies.NetworkFirst({
    networkTimeoutSeconds: 3,
    cacheName: 'xx:html',
    plugins: [
      new workbox.cacheableResponse.Plugin({
        statuses: [200], // 剔除重定向
      }),
      new workbox.expiration.Plugin({
        maxEntries: 10,
        maxAgeSeconds: 3 * 24 * 60 * 60,
        purgeOnQuotaError: true,
      }),
    ],
  })
);

// webp plugin
var webpPlugin = {
  requestWillFetch(options) {
    var request = options.request;
    var url = request.url;
    var destination = request.destination;
    var isImage = destination === 'image';
    var isFormatted = url.includes('imageView2') && url.includes('format');
    var acceptWebp = request.headers.get('accept').includes('webp');

    if (isImage && !isFormatted) {
      var isInTheBlacklist = FORMAT_IMG_BLACKLIST.find(function (item) {
        return url.includes(item)
      });

      // 支持webp
      if (!isInTheBlacklist && acceptWebp) {
        var index = url.indexOf('?');
        var hasSearch = index !== -1;
        var search = hasSearch ? url.substring(index, url.length) : null;

        url = (hasSearch ? url.substring(0, index) : url) + analysisImageView(search);

        // 自定义请求对象
        return new Request(url, request)
      }
    };

    //去掉webp不支持的场景
    var isImageMogr2 = url.includes('imageMogr2') && url.includes('format/webp');
    var isImageView2 = url.includes('imageView2') && url.includes('format/webp');
    if (isImage && (isImageMogr2 || isImageView2) && !acceptWebp) {
      url = url.replace('format/webp','format/png');
       // 自定义请求对象
      return new Request(url, request);
    };

    return request;
  },
};

// 静态资源缓存
workbox.routing.registerRoute(
  function (options) {
    var request = options.event.request;
    var mode = request.mode;
    var url = request.url;
    var destination = request.destination;
    var skipServiceWorker = SKIP_CACHE.test(url);

    return !skipServiceWorker && mode !== 'cors' && CACHE_TYPES.indexOf(destination) > -1 && !STATIC_BLACKLIST.test(url)
  },
  new workbox.strategies.NetworkOnly({
    cacheName: 'xx:static',
    plugins: [
      webpPlugin,
      // new workbox.cacheableResponse.Plugin({
      //   statuses: [0, 200],
      // }),
      // new workbox.expiration.Plugin({
      //   maxEntries: 300,
      //   maxAgeSeconds: 7 * 24 * 60 * 60,
      //   purgeOnQuotaError: true,
      // }),
    ],
  })
);

// webp url拼接
function analysisImageView(search) {
  if (!search) {
    return '?imageView2/0/format/webp'
  };

  search = search.substring(1, search.length);
  var searchArray = search.split('&');

  searchArray = searchArray.map(function (param) {
    if (/imageView2/.test(param) && !/interlace/.test(param)) {
      var hasFormat = false;
      var imageViewParams = param.split('/');

      for (var i = 0; i < imageViewParams.length; i += 2) {
        var key = imageViewParams[i];

        if (key === 'format') {
          hasFormat = true;
          imageViewParams[i + 1] = 'webp';
        };
      };

      return hasFormat ? imageViewParams.join('/') : param + '/format/webp'
    }

    return param
  });

  return '?' + searchArray.join('&');
};

function isInYpp(userAgent) {
  return /(env)/.test(userAgent);
};

// 是否在移动端容器
function isInMobile(userAgent) {
  return /Android|webOS|iPhone|iPod|BlackBerry/i.test(userAgent);
};
