function compose(...middleware){
    function dispatch(i){
      const fn = middleware.shift();
      return new Promise((resolve)=>{
        if(fn) fn(dispatch.bind(null,i+1))
        resolve()
      })
    }
    dispatch(0)
}

compose(a1,a2,a3)

function a1(next){
  console.log("a1 before")
  next()
  console.log("a1 after")
}
function a2(next){
  console.log("a2 before")
  next()
  console.log("a2 after")
}
function a3(next){
  console.log("a3 before")
  next()
  console.log("a3 after")
}