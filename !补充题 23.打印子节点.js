const data = {
  name: "root",
  children: [
    {
      name: "child_0",
      children: [
        {
          name: "child_0_0",
          children: [],
        },
      ],
    },
    {
      name: "child_1",
      children: [
        {
          name: "child_1_0",
          children: [],
        },
      ],
    },
  ],
};

function bfs(data) {
  let res = [];
  let queue = [data];
  while (queue.length) {
    let len = queue.length;
    while (len) {
      let node = queue.shift();
      res.push(node.name);
      len--;
      queue.push(...node.children);
    }
  }
  return res;
}

console.log(bfs(data));
