import Router from 'koa-router'
import verify from '../middleware/verify'
import * as controllers from '../controllers/monitor'

const router = Router()

router.get('/m', controllers.collectError)
router.post('/monitor/list', verify, controllers.monitorList)
router.post('/monitor/detail', verify, controllers.monitorDetail)

module.exports = router
