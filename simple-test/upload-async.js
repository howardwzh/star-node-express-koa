const Koa = require('koa')
const path = require('path')
const app = new Koa()
const views = require('koa-views')
const static = require('koa-static')
// const bodyParser = require('koa-bodyparser')

const { uploadFile } = require('./utils/upload')

/**
 * 使用第三方中间件 start 
 */
app.use(views(path.join(__dirname, './view'), {
  extension: 'ejs'
}))

// 静态资源目录对于相对入口文件index.js的路径
const staticPath = './static'
// 由于koa-static目前不支持koa2
// 所以只能用koa-convert封装一下
app.use(static(
  path.join( __dirname,  staticPath)
))
/**
 * 使用第三方中间件 end 
 */

app.use( async ( ctx ) => {

  if ( ctx.method === 'GET' ) {
    let title = 'upload pic async'
    await ctx.render('upload', {
      title,
    })
  } else if ( ctx.url === '/api/picture/upload.json' && ctx.method === 'POST' ) {
    // 上传文件请求处理
    let result = { success: false }
    let serverFilePath = path.join( __dirname, 'static/images' )

    // 上传文件事件
    result = await uploadFile( ctx, {
      fileType: 'album', // common or album
      path: serverFilePath
    })

    ctx.body = result
  } else {
    // 其他请求显示404
    ctx.body = '<h1>404！！！ o(╯□╰)o</h1>'
  }
})

app.listen(3000)

console.log('[demo] upload-simple is starting at port 3000')