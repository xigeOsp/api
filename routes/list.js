const router = require('koa-router')()
const request = require('../utils/http')


router.prefix('/api/list')

//! 人气列表
router.get('/hot', async (ctx, next) => {
  const { cid } = ctx.request.query 

  const hotData = await request({
    url: `http://www.qinqin.net/index.php?r=class%2Fcyajaxsub&page=1&cid=${ cid }&px=t&cac_id=`
  })
  await ctx.render('list/index', {
    data: JSON.stringify( hotData )
  })
  /**
    * @api {get} /api/lst/hot 获取人气商品列表
    * @apiVersion 1.0.0
    * @apiName hot
    * @apiGroup List
    * 
    * @apiParam { String } cid  商品cid
    *
    * @apiSuccessExample {json} Success response:
    *    {
    *        "status": 0,
    *        "data": "{[]}",
    *        "msg": ""
    *    }
    * @apiSampleRequest http://59.110.226.77:3000/api/list/hot
  */
})

//! 最新列表

router.get('/latest', async (ctx, next) => {
  const { cid } = ctx.request.query 

  const data = await request({
    url: `http://www.qinqin.net/index.php?r=class%2Fcyajaxsub&page=1&cid=${ cid }&px=latest&cac_id=`
  })
  await ctx.render('list/index', {
    data: JSON.stringify( data )
  })
  /**
    * @api {get} /api/lst/latest 获取最新商品列表
    * @apiVersion 1.0.0
    * @apiName latest
    * @apiGroup List
    * 
    * @apiParam { String } cid  商品cid
    *
    * @apiSuccessExample {json} Success response:
    *    {
    *        "status": 0,
    *        "data": "{[]}",
    *        "msg": ""
    *    }
    * @apiSampleRequest http://59.110.226.77:3000/api/list/latest
  */
})


//! 销量列表

router.get('/sell', async (ctx, next) => {
  const { cid } = ctx.request.query 

  const data = await request({
    url: `http://www.qinqin.net/index.php?r=class%2Fcyajaxsub&page=1&cid=${ cid }&px=sell&cac_id=`
  })
  await ctx.render('list/index', {
    data: JSON.stringify( data )
  })
  /**
    * @api {get} /api/lst/sell 获取销量排名商品列表
    * @apiVersion 1.0.0
    * @apiName sell
    * @apiGroup List
    * 
    * @apiParam { String } cid  商品cid
    *
    * @apiSuccessExample {json} Success response:
    *    {
    *        "status": 0,
    *        "data": "{[]}",
    *        "msg": ""
    *    }
    * @apiSampleRequest http://59.110.226.77:3000/api/list/sell
  */
})



//! 价格排序列表

router.get('/price', async (ctx, next) => {
  const { cid } = ctx.request.query 

  const data = await request({
    url: `http://www.qinqin.net/index.php?r=class%2Fcyajaxsub&page=1&cid=${ cid }&px=price_h&cac_id=`
  })
  await ctx.render('list/index', {
    data: JSON.stringify( data )
  })
  /**
    * @api {get} /api/lst/price 获取价格排序商品列表
    * @apiVersion 1.0.0
    * @apiName price
    * @apiGroup List
    * 
    * @apiParam { String } cid  商品cid
    *
    * @apiSuccessExample {json} Success response:
    *    {
    *        "status": 0,
    *        "data": "{[]}",
    *        "msg": ""
    *    }
    * @apiSampleRequest http://59.110.226.77:3000/api/list/price
  */
})


module.exports = router
