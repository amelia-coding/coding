let o = { a: { b: { c: 8 } } } //a.b.c
let arr = [{ a: { b: { c: 8 } } }] // [0].a.b.c

function getValue(o, path) {
  const paths = path
    .replace(/\[(\d+)\]/g, '.$1')
    .split('.')
    .filter((item) => !!item)
  res = o
  for (let key of paths) {
    res = res[key]
    if (res === null || res === undefined) {
      break
    }
  }
  console.log(res)
  return res
}

// getValue(o, 'a.b.c.d')
getValue(arr, '[0].a.b.c')
