var obj = {
  id: 1,
  child: [
    {
      id: 2,
      child: [
        {
          id: 4,
        },
      ],
    },
    {
      id: 3,
    },
  ],
};
function addParent(obj) {
  loop(obj.child, obj.id);
  console.log(JSON.stringify(obj));
}

function loop(child, id) {
  if (!child) {
    return;
  }
  for (let i = 0; i < child.length; i++) {
    child[i].parentid = id;
    loop(child[i].child, child[i].id);
  }
}
addParent(obj);
