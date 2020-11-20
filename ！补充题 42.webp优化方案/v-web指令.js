// 自定义指令
Vue.directive('webp', {
  // 识别图片转化webp
  bind: function (el, binding) {
    const supportWebP = (function () {
      var canvas = document.createElement('canvas')
      canvas.width = canvas.height = 1
      return canvas.toDataURL ? canvas.toDataURL('image/webp').indexOf('image/webp') === 5 : false
      //return false
    })()
    if (el.tagName.toLowerCase() === 'img' && el.src && el.src.indexOf('data:image') === -1) {
      const _src = el.src
      const prefix = _src.split('?')[0]
      if (supportWebP) {
        el.src =
          _src.indexOf('/format/') > 0
            ? _src.replace(/\/format\/([\w]*)/g, function (a, b) {
                return '/format/webp'
              })
            : _src.indexOf('?imageView2/') > 0
            ? `${_src}/format/webp`
            : `${prefix}?imageView2/0/format/webp`
      } else if (_src.indexOf('/format/webp') > 0) {
        el.src = _src.replace(/\/format\/([\w]*)/g, function (a, b) {
          return '/format/png'
        })
      }
      el.onerror = function () {
        el.src = _src // WebP加载失败则回退至源文件
      }
    } else if (el.tagName.toLowerCase() === 'div') {
      //兼容头像
      if (el.classList.contains('avatar-wrap')) {
        const _src = el.childNodes[0].src
        if (_src.indexOf('?imageView2') > 0) {
          el.childNodes[0].src = supportWebP
            ? _src.replace(/\/format\/([\w]*)/g, function (a, b) {
                return '/format/webp'
              })
            : _src.replace(/\/format\/([\w]*)/g, function (a, b) {
                return '/format/png'
              })
        }
      } else {
        //背景图片
        el.style.backgroundImage = supportWebP
          ? 'url("' + binding.value + '?imageView2/0/format/webp")'
          : 'url("' + binding.value + '")'
      }
    }
  },
})s