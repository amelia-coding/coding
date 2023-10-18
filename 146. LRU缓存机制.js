// 基础解法：数组+对象实现

// 类 vue keep-alive 实现

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.keys = []
  this.cache = Object.create(null)
  this.capacity = capacity
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.cache[key]) {
    // 调整位置
    remove(this.keys, key)
    this.keys.push(key)
    return this.cache[key]
  }
  return -1
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.cache[key]) {
    // 存在即更新
    this.cache[key] = value
    remove(this.keys, key)
    this.keys.push(key)
  } else {
    // 不存在即加入
    this.keys.push(key)
    this.cache[key] = value
    // 判断缓存是否已超过最大值
    if (this.keys.length > this.capacity) {
      removeCache(this.cache, this.keys, this.keys[0])
    }
  }
}

// 移除 key
function remove(arr, key) {
  if (arr.length) {
    const index = arr.indexOf(key)
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

// 移除缓存中 key
function removeCache(cache, keys, key) {
  cache[key] = null
  remove(keys, key)
}

// 进阶：Map

// 利用 Map 既能保存键值对，并且能够记住键的原始插入顺序

var LRUCache = function (capacity) {
  this.cache = new Map()
  this.capacity = capacity
}

LRUCache.prototype.get = function (key) {
  if (this.cache.has(key)) {
    // 存在即更新
    let temp = this.cache.get(key)
    this.cache.delete(key)
    this.cache.set(key, temp)
    return temp
  }
  return -1
}

LRUCache.prototype.put = function (key, value) {
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

// const map = new Map()

// map.set('1', 1)
// map.set('3', 3)
// map.set('2', 2)

// const keys = map.keys()

// console.log(keys.next())
// console.log(keys.next())