const router = require('koa-router')()
const sendMsg = require('../utils/sendMsg')

router.prefix('/duanxin')

router.get('/send', sendMsg.send)


module.exports = router
