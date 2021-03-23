function generate(level, maxChildren) {
  function _gen(_level, root) {
    if (_level === 1) return null
    if(_level === level)  root.val =  _level
    let pLen = parseInt(Math.random() * maxChildren, 10) + 1
    root.chilren = Array.from(new Array(pLen), () => new Object({val:_level-1}));
    root.chilren.forEach((o) => {
      _gen(_level - 1, o)
    })
    return root
  }
  return _gen(level, {})
}

console.log(JSON.stringify(generate(3, 4)))


