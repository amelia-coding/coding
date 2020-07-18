const parseQueryString = (url) => {
  if (typeof url === "string") {
    let obj = {};
    const paramPart = url.replace(/#\S*/, "").match(/\?[^#]+/);
    if (paramPart === null) {
      return {};
    }
    const paramGroup = paramPart[0].substr(1).split("&");
    for (let i = 0, length = paramGroup.length; i < length; i++) {
      let name = paramGroup[i].split("=")[0];
      let value = paramGroup[i].match(/[=].*/)
        ? paramGroup[i].match(/[=].*/)[0].substr(1)
        : null;
      obj[name] = value;
    }

    return obj;
  } else {
    throw new Error("请传入字符串");
  }
};
