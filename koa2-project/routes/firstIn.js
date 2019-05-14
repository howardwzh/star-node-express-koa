import Router from 'koa-router'
import verify from '../middleware/verify'
import * as controllers from '../controllers/firstIn'

const router = Router()

router.get('/f', controllers.collectFirstIn)
router.post('/first/list', verify, controllers.firstInList)
router.post('/first/detail', verify, controllers.firstInDetail)

module.exports = router
