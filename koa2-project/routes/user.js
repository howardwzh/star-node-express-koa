import * as controllers from '../controllers/user'
import verify from '../middleware/verify'

const router = require('koa-router')()

router.prefix('/auth')

router.post('/login', controllers.login)
router.post('/info', verify, controllers.info)

module.exports = router
