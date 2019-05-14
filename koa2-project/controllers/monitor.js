import Monitor from '../models/monitor'
import { decodePageUrl } from '../helper/utils'

export async function collectError (ctx) {
  const { msg, url, line, col, userId, userPhone, page } = ctx.query
  const ip = ctx.request.ip || '0.0.0.0'
  const monitor = new Monitor({
    msg,
    url,
    line,
    col,
    device: ctx.request.header['user-agent'],
    userId,
    userPhone,
    page: decodePageUrl(page),
    ip
  });
  console.log(ctx.request)
  console.log(monitor)
  const createResult = await monitor.save().catch(err => {
    ctx.throw(500, '服务器内部错误')
  });
  ctx.body = {
    code: 0,
    msg: createResult
  }
}
export async function monitorList (ctx) {
  const { pageNo, pageSize } = ctx.request.body
  const list = await Monitor.find()
    .sort({ time: -1 })
    .skip(pageSize * (pageNo-1))
    .limit(pageSize)
    .catch(err => {
      ctx.throw(500, '服务器内部错误')
    });
    console.log(pageNo)
    console.log(pageSize)
  const count = await Monitor.count().catch(err => {
    this.throw(500, '服务器内部错误')
  })
  ctx.body = {
    code: 0,
    data: {
      list,
      count
    }
  }
}
export async function monitorDetail (ctx) {
  const { id: _id } = ctx.request.body
  const monitor = await Monitor.findOne({_id})
    .catch(err => {
      ctx.throw(500, '服务器内部错误')
    });
  ctx.body = {
    code: 0,
    data: monitor
  }
}

