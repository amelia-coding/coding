/*
1146. 快照数组
实现支持下列接口的「快照数组」- SnapshotArray：

SnapshotArray(int length) - 初始化一个与指定长度相等的 类数组 的数据结构。初始时，每个元素都等于 0。
void set(index, val) - 会将指定索引 index 处的元素设置为 val。
int snap() - 获取该数组的快照，并返回快照的编号 snap_id（快照号是调用 snap() 的总次数减去 1）。
int get(index, snap_id) - 根据指定的 snap_id 选择快照，并返回该快照指定索引 index 的值。
 

示例：

输入：["SnapshotArray","set","snap","set","get"]
     [[3],[0,5],[],[0,6],[0,0]]
输出：[null,null,0,null,5]
解释：
SnapshotArray snapshotArr = new SnapshotArray(3); // 初始化一个长度为 3 的快照数组
snapshotArr.set(0,5);  // 令 array[0] = 5
snapshotArr.snap();  // 获取快照，返回 snap_id = 0
snapshotArr.set(0,6);
snapshotArr.get(0,0);  // 获取 snap_id = 0 的快照中 array[0] 的值，返回 5

*/

/**
 * @param {number} length
 */
var SnapshotArray = function (length) {
  // 使用字典数组来记录快照数组
  this.arr = new Array(length).fill(0).map(() => new Map());
  this.snapId = 0;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function (index, val) {
  this.arr[index].set(this.snapId, val);
};

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function () {
  // 快照号是调用 snap() 的总次数减去 1
  this.snapId++;
  return this.snapId - 1;
};

/**
 * @param {number} index
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function (index, snap_id) {
  // 找到这个数的所有记录
  let snapIds = [...this.arr[index].keys()];
  // 二分查找，找到 <= snap_id 的值
  let low = 0,
    high = snapIds.length - 1,
    mid;
  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (snapIds[mid] < snap_id) {
      low = mid + 1;
    } else if (snapIds[mid] > snap_id) {
      high = mid - 1;
    } else if (snapIds[mid] === snap_id) {
      return this.arr[index].get(snap_id);
    }
  }
  return this.arr[index].get(snapIds[low - 1]) || null;
};

/**
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */
