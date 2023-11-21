let o = { a: { b: { c: 8 } } } //a.b.c
let arr = [{ a: { b: { c: 8 } } }] // [0].a.b.c

function getValue(o, path) {
  const paths = path
    .replace(/\[(\d+)\]/g, '.$1') //将[0]中的0替换'.0', 执行结果.0.a.b.c
    .split('.') // 执行结果0,a,b,c
    .filter((item) => !!item)

  let res = o

  //paths:[0,a,b,c]
  for (let key of paths) {
    res = res[key]
    if (res === null || res === undefined) break
  }
  return res
}

console.log(getValue(arr, '[0].a.b.c'))
console.log(
  getValue(
    {
      a: [{ b: { c: 2 } }],
    },
    'a.[0].b.c'
  )
)
