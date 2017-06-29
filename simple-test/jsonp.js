const Koa = require('koa')
const jsonp = require('koa-jsonp')
const app = new Koa()

app.use(jsonp())
app.use( async (ctx) => {
  let returnData = {
    success: true,
    data: {
      text: 'this is a jsonpapi',
      teime: new Date().getTime()
    }
  }

  ctx.body = returnData
})

// app.use( async (ctx) => {
//   if (ctx.method === 'GET' && ctx.url.split('?')[0] === '/getData.jsonp') {
//     let callbackName = ctx.query.callback || 'callback'
//     let returnData = {
//       success: true,
//       data: {
//         text: 'this is a jsonpapi',
//         teime: new Date().getTime()
//       }
//     }

//     let jsonpStr = `;${callbackName}(${JSON.stringify(returnData)})`

//     ctx.type = 'text/javascript'

//     ctx.body = jsonpStr
//   } else {
//     ctx.body = 'hello jsonp'
//   }
// })

app.listen(3000)

console.log('[demo] upload-simple is starting at port 3000')