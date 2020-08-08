class LockService {
  key: string;
  constructor(key: string) {
    this.key = key;
  }
  static keyLock: object = {}; //保存lock实例
  static keyLockStatus: object = {}; //保存lock的状态
  static keyTaskQue: object = {}; //保存等待获取lock的Queue

  static async lockByKey(key: string) {
    if (!LockService.keyLock[key]) {
      LockService.keyLock[key] = new LockService(key);
    }
    if (!LockService.keyTaskQue[key]) {
      LockService.keyTaskQue[key] = [];
    }
    if (!LockService.keyLockStatus[key]) {
      LockService.keyLockStatus[key] = false;
    }
    let locker: LockService = LockService.keyLock[key];
    let keyTasks = LockService.keyTaskQue[key];

    return new Promise((resolve) => {
      if (keyTasks.length === 0 && !LockService.keyLockStatus[key]) {
        LockService.keyLockStatus[key] = true;
        resolve(locker);
      } else {
        keyTasks.push(resolve.bind(null, locker));
      }
    });
  }
  release(): void {
    if (LockService.keyTaskQue[this.key].length === 0) {
      LockService.keyLockStatus[this.key] = false;
    } else {
      let keyTask = LockService.keyTaskQue[this.key].shift();
      setTimeout(() => keyTask(), 0);
    }
  }
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function _process(key: string) {
  // 同一个key会被锁住，不同的key不受影响
  let locker = await LockService.lockByKey(key);
  console.log("get locker", key);
  try {
    // 停留1s
    await delay(1000);
  } finally {
    console.log("end locker", key);
    (locker as LockService).release();
  }
}

_process("key1");
_process("key1");
_process("key2");
setTimeout(() => {
  _process("key2");
}, 5000);
