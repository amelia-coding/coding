/**
 * 146. LRU 缓存

请你设计并实现一个满足  LRU (最近最少使用) 缓存 约束的数据结构。
实现 LRUCache 类：
LRUCache(int capacity) 以 正整数 作为容量 capacity 初始化 LRU 缓存
int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
void put(int key, int value) 如果关键字 key 已经存在，则变更其数据值 value ；如果不存在，则向缓存中插入该组 key-value 。如果插入操作导致关键字数量超过 capacity ，则应该 逐出 最久未使用的关键字。
函数 get 和 put 必须以 O(1) 的平均时间复杂度运行。
 
输入
["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
输出
[null, null, null, 1, null, -1, null, -1, 3, 4]

解释
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // 缓存是 {1=1}
lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
lRUCache.get(1);    // 返回 1
lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
lRUCache.get(2);    // 返回 -1 (未找到)
lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
lRUCache.get(1);    // 返回 -1 (未找到)
lRUCache.get(3);    // 返回 3
lRUCache.get(4);    // 返回 4
*/

/**
解题思路
Set.prototype上有add、clear、delete、entries、foreach、has、keys、values
const setObj = new Set()

setObj.add('1', 1)
setObj.add('3', 3)
setObj.add('2', 2)
const keys = setObj.keys()

console.log(keys.next())
console.log(keys.next())

//Map 对象保存键值对，并且能够记住键的原始插入顺序
//Map.prototype上有get、set、clear、delete、entries、foreach、has、keys、values

const map = new Map()

map.set('1', 1)
map.set('3', 3)
map.set('2', 2)
const keys = map.keys()

console.log(keys.next())
console.log(keys.next())
*/

/**
 * 
进阶：Map
利用 Map 既能保存键值对，并且能够记住键的原始插入顺序
const map = new Map()
 */
class LRUCache {
  constructor(capacity) {
    this.cache = new Map()
    this.capacity = capacity
  }
  put(key, value) {
    if (this.cache.has(key)) {
      // 存在即更新（删除后加入）
      this.cache.delete(key)
    } else if (this.cache.size >= this.capacity) {
      // 不存在即加入
      // 缓存超过最大值，则移除最近没有使用的
      this.cache.delete(this.cache.keys().next().value)
    }
    this.cache.set(key, value)
  }

  get() {
    if (this.cache.has(key)) {
      // 存在即更新
      let temp = this.cache.get(key)
      this.cache.delete(key)
      this.cache.set(key, temp)
      return temp
    }
    return -1
  }
}

const a = new LRUCache(3)
a.put('key1', 1)
a.put('key2', 2)
a.put('key3', 3)
a.put('key4', 4)

console.log(a)
