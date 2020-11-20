var rABS = true;
const f = fileList[0];
var reader = new FileReader();
reader.onload = function (e) {
  var data = e.target.result;
  if (!rABS) data = new Uint8Array(data);
  var workbook = XLSX.read(data, {
    type: rABS ? "binary" : "array",
  });
  // 假设我们的数据在第一个标签
  var first_worksheet = workbook.Sheets[workbook.SheetNames[0]];
  // XLSX自带了一个工具把导入的数据转成json
  var jsonArr = XLSX.utils.sheet_to_json(first_worksheet, { header: 1 });
  // 通过自定义的方法处理Json，比如加入state来展示
  handleExcelJson(jsonArr.slice(2));
  uploadStatus = "done";
};
if (rABS) reader.readAsBinaryString(f);
else reader.readAsArrayBuffer(f);
