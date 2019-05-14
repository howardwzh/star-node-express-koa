import User from '../models/user'
import jwt from 'jsonwebtoken'
import config from '../configs'

/**
 * 登录
 * @param {Object} ctx 
 */
export async function login (ctx) {
  const { userName, password } = ctx.request.body
  if (!userName || !password) {
    return ctx.body = {
			code: -1,
			data: null,
			msg: '参数不合法'
		}
  }
  const result = await User.findOne({
    userName,
    password
  });
  if (result) {
    const token = jwt.sign({
      name: result.userName,
			_id: result._id
    }, config.jwt.secret, { expiresIn: '8h' })
    return ctx.body = {
			code: 0,
			data: {
        token,
        userName: result.userName,
        roleName: result.roleName
      },
			msg: '登录成功'
		}
  } else {
    return ctx.body = {
			code: -2,
			data: null,
			msg: '用户名或密码错误'
		}
  }
}
/**
 * 用户信息
 * @param {Object} ctx 
 */
export async function info (ctx) {
  const { userName } = ctx.request.body
  if (!userName) {
    return ctx.body = {
			code: '000002',
			data: null,
			msg: '用户名不能为空'
		}
  }
  const result = await User.findOne({
    userName
  });
  if (result) {
    return ctx.body = {
			code: '000001',
			data: {
        userName: result.userName,
        roleName: result.roleName
      },
			msg: 'success'
		}
  } else {
    return ctx.body = {
			code: '000002',
			data: null,
			msg: '没有该用户'
		}
  }
}
