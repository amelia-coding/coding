/**
 * 
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
