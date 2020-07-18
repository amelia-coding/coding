# 模块化

- CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。
- CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。
- CommonJS 加载的是一个对象（即 module.exports 属性），该对象只有在脚本运行完才会生成。而 ES6 模块不是对象，它的对外接口只是一种静态定义，在代码静态解析阶段就会生成

// CommonJS 模块

let { stat, exists, readFile } = require('fs');

// 等同于

let \_fs = require('fs');

let stat = \_fs.stat;

let exists = \_fs.exists;

let readfile = \_fs.readfile;

import { stat, exists, readFile } from 'fs';
