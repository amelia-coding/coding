/*
380. 常数时间插入、删除和获取随机元素
设计一个支持在平均 时间复杂度 O(1) 下，执行以下操作的数据结构。

insert(val)：当元素 val 不存在时，向集合中插入该项。
remove(val)：元素 val 存在时，从集合中移除该项。
getRandom：随机返回现有集合中的一项。每个元素应该有相同的概率被返回。
示例 :

// 初始化一个空的集合。
RandomizedSet randomSet = new RandomizedSet();

// 向集合中插入 1 。返回 true 表示 1 被成功地插入。
randomSet.insert(1);

// 返回 false ，表示集合中不存在 2 。
randomSet.remove(2);

// 向集合中插入 2 。返回 true 。集合现在包含 [1,2] 。
randomSet.insert(2);

// getRandom 应随机返回 1 或 2 。
randomSet.getRandom();

// 从集合中移除 1 ，返回 true 。集合现在包含 [2] 。
randomSet.remove(1);

// 2 已在集合中，所以返回 false 。
randomSet.insert(2);

// 由于 2 是集合中唯一的数字，getRandom 总是返回 2 。
randomSet.getRandom();
*/

//Map + 数组
var RandomizedSet = function () {
  this.map = new Map()
  this.values = []
}

RandomizedSet.prototype.insert = function (val) {
  // 存在
  if (this.map.has(val)) {
    return false
  }
  // 不存在
  this.map.set(val, this.values.length)
  this.values.push(val)
  return true
}

RandomizedSet.prototype.remove = function (val) {
  // 不存在
  if (!this.map.has(val)) {
    return false
  }

  const index = this.map.get(val)
  // 存在且为最后一个元素
  if (index === this.values.length - 1) {
    this.values.pop()
    this.map.delete(val)
  } else {
    // 存在不为最后一个元素
    const lastValue = this.values.pop()
    this.values[index] = lastValue
    this.map.set(lastValue, index)
    this.map.delete(val)
  }
  return true
}

RandomizedSet.prototype.getRandom = function () {
  const length = this.values.length
  const random = Math.floor(Math.random() * length)
  return this.values[random]
}
