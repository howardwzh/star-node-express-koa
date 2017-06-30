# koa2

## 参考文章
- [《koa2进阶学习笔记》](https://chenshenhai.github.io/koa2-note/)

## 开始

### hello koa2
#### 安装koa2 
```
# 初始化package.json
npm init

# 安装koa2 
npm install koa
```
#### index.js
```index.js
const Koa = require('koa')
const app = new Koa()

app.use( async ( ctx ) => {
  ctx.body = 'hello koa2'
})

app.listen(3000)
console.log('[demo] start-quick is starting at port 3000')
```
#### 启动
```
node index.js
```

### async/await使用

先复制以下这段代码，在粘贴在chrome的控制台console中，按回车键执行

```js
function getSyncTime() {
  return new Promise((resolve, reject) => {
    try {
      let startTime = new Date().getTime()
      setTimeout(() => {
        let endTime = new Date().getTime()
        let data = endTime - startTime
        resolve( data )
      }, 500)
    } catch ( err ) {
      reject( err )
    }
  })
}

async function getSyncData() {
  let time = await getSyncTime()
  let data = `endTime - startTime = ${time}`
  return data
}

async function getData() {
  let data = await getSyncData()
  console.log( data )
}

getData()
```

### koa2简析结构

#### 源码文件

```
├── lib
│   ├── application.js
│   ├── context.js
│   ├── request.js
│   └── response.js
└── package.json
```

- application.js 是整个koa2 的入口文件，封装了context，request，response，以及最核心的中间件处理流程。
- context.js 处理应用上下文，里面直接封装部分request.js和response.js的方法
- request.js 处理http请求
- response.js 处理http响应

#### koa2特性

- 只提供封装好http上下文、请求、响应，以及基于async/await的中间件容器。
- 利用ES7的async/await的来处理传统回调嵌套问题和代替koa@1的generator，但是需要在node.js 7.x的harmony模式下才能支持async/await。
- 中间件只支持 async/await 封装的，如果要使用koa@1基于generator中间件，需要通过中间件koa-convert封装一下才能使用。

### koa中间件开发和使用

#### async中间件开发

```js
/* ./middleware/logger-async.js */
function log( ctx ) {
    console.log( ctx.method, ctx.header.host + ctx.url )
}

module.exports = function () {
  return async function ( ctx, next ) {
    log(ctx);
    await next()
  }
}
```

#### async 中间件在koa@2中使用

PS: async 中间件只能在 koa v2中使用

```
const Koa = require('koa') // koa v2
const loggerAsync  = require('./middleware/logger-async')
const app = new Koa()

app.use(loggerAsync())

app.use(( ctx ) => {
    ctx.body = 'hello world!'
})

app.listen(3000)
console.log('the server is starting at port 3000')
```