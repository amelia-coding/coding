var arr = [
  ["A", "B"],
  ["a", "b"],
  [1, 2],
];

function gen(arr) {
  let res = [];
  dfs(arr, 0, [], res);
  console.log(res);
}

var data = [];
function test() {
  for (var i = 0; i < 3; i++) {
    (function (i) {
      data[i] = function () {
        console.log(i);
      };
    })(i);
  }
}

test();
data[1]();
