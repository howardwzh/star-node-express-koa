import FirstIn from '../models/firstIn'
import { decodePageUrl } from '../helper/utils'

export async function collectFirstIn (ctx) {
  const { whiteTime, readyTime, loadTime, userId, userPhone, page } = ctx.query
  const ip = ctx.request.ip || '0.0.0.0'
  const firstIn = new FirstIn({
    whiteTime,
    readyTime,
    loadTime,
    device: ctx.request.header['user-agent'],
    userId,
    userPhone,
    page: decodePageUrl(page),
    ip
  });
  const createResult = await firstIn.save().catch(err => {
    ctx.throw(500, '服务器内部错误')
  });
  ctx.body = {
    code: 0,
    msg: createResult
  }
}
export async function firstInList (ctx) {
  const { pageNo, pageSize } = ctx.request.body
  const list = await FirstIn.find()
    .sort({ time: -1 })
    .skip(pageSize * (pageNo-1))
    .limit(pageSize)
    .catch(err => {
      ctx.throw(500, '服务器内部错误')
    });
    console.log(pageNo)
    console.log(pageSize)
  const count = await FirstIn.count().catch(err => {
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
export async function firstInDetail (ctx) {
  const { id: _id } = ctx.request.body
  const firstIn = await FirstIn.find({_id})
    .catch(err => {
      ctx.throw(500, '服务器内部错误')
    });
  ctx.body = {
    code: 0,
    data: firstIn
  }
}

