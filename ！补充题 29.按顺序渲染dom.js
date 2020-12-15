//如果有n个接口，需要按照接口顺序渲染dom，怎么实现
//提供get(id)和render(id)方法

function fetchList(ids) {
  return ids.map(id=> new Promise((resolve) => {
    resolve(get(id));
  }))
}

function start(orders){
  let arr = fetchList(orders)
  for (let i = 0; i < arr.length; i++) {
    let data = await arr[i]
    render(id,data)
  }
}
