const Koa = require('koa')
const path = require('path')
const static = require('koa-static')
const app = new Koa()

// 静态资源目录对于相对入口文件index.js的路径
const staticPath = './static'

// 所以只能用koa-convert封装一下
app.use(static(
  path.join( __dirname,  staticPath)
))


app.use( async ( ctx ) => {
  ctx.body = 'hello world'
})


app.listen(3000, () => {
  console.log('The server is running at http://localhost:3000');
})