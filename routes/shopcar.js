const router = require('koa-router')()
const { shopcars } = require('../db')
const { checkToken } = require('../token')

router.prefix('/api/shopcar')


// 添加购物车
router.post('/add',async ( ctx,next ) => {
  const { token } = ctx.request.body 
  const checkTokenInfo = await checkToken( token )
  let result = {}
  if ( checkTokenInfo.code == 0 ) {
    result = checkTokenInfo
  } else {
    let newData = JSON.parse( JSON.stringify( ctx.request.body ))
    delete newData.token 
    result = await shopcars.add( newData )
  }

  ctx.body = result 


  /**
    * @api {post} /api/shopcar/add 添加购物车
    * @apiVersion 1.0.0
    * @apiName add
    * @apiGroup Shopcar
    * @apiParam {String} imgRul 图片url
    * @apiParam {String} d_title 商品主题
    * @apiParam {String} price 价格
    * @apiParam {String} oringinal 原价
    * @apiParam {String} sales 销量
    * @apiParam {String} comment 评论数
    * @apiParam {String} num 商品数量
    * @apiParam {String} token token
    * @apiParam {String} shopId 商品id
    *
    * @apiSuccessExample {json} Success response:
    *    {
    *        "status": 1,
    *        "msg": "商品添加购物车成功"
    *    }
    * @apiErrorExample {json} Success response:
    *    {
    *        "status": 0,
    *        "msg": "商品添加购物车失败或是token验证失败"
    *    }
    * @apiSampleRequest http://59.110.226.77:3000/api/shopcar/add
  */

})

// 获取购物车列表
router.get('/getCar',async ( ctx,next ) => {
  const { token } = ctx.request.query 
  const checkTokenInfo = await checkToken( token )
  let result = {}
  if ( checkTokenInfo.code == 0 ) {
    result = checkTokenInfo
  } else {
    result = await shopcars.query()
  }
  ctx.body = result 
  /**
    * @api {get} /api/shopcar/getCar 获取购物车列表
    * @apiVersion 1.0.0
    * @apiName getCar
    * @apiGroup Shopcar
    * @apiParam {String} token token
    *
    * @apiSuccessExample {json} Success response:
    *    {
    *        "status": 1,
    *        "msg": "获取购物车列表成功",
    *        "data": "[{}]"
    *    }
    * @apiErrorExample {json} Success response:
    *    {
    *        "status": 0,
    *        "msg": "获取失败"
    *    }
    * @apiSampleRequest http://59.110.226.77:3000/api/shopcar/getCar
  */
})

// 更新购物车
router.get('/update',async ( ctx,next ) => {
  const { num,token,shopId } = ctx.request.query 
  const checkTokenInfo = await checkToken( token )
  let result = {}
  if ( checkTokenInfo.code == 0 ) {
    result = checkTokenInfo
  } else {
    result = await shopcars.modify({shopId,num})
  }
  ctx.body = result 
  /**
    * @api {get} /api/shopcar/update 更新购物车
    * @apiVersion 1.0.0
    * @apiName update
    * @apiGroup Shopcar
    * @apiParam {String} token token
    * @apiParam {String} num 商品数量
    * @apiParam {String} shopId 商品id
    *
    * @apiSuccessExample {json} Success response:
    *    {
    *        "status": 1,
    *        "msg": "更新成功",
    *    }
    * @apiErrorExample {json} Success response:
    *    {
    *        "status": 0,
    *        "msg": "更新失败"
    *    }
    * @apiSampleRequest http://59.110.226.77:3000/api/shopcar/update
  */
})

// 删除购物车中有一个商品

router.post('/del',async ( ctx,next ) => {
  const { token,shopId } = ctx.request.body 
  const checkTokenInfo = await checkToken( token )
  let result = {}
  if ( checkTokenInfo.code == 0 ) {
    result = checkTokenInfo
  } else {
    result = await shopcars.del(shopId)
  }
  ctx.body = result 
  /**
    * @api {post} /api/shopcar/del 删除购物车中某一条数据
    * @apiVersion 1.0.0
    * @apiName del
    * @apiGroup Shopcar
    * @apiParam {String} token token
    * @apiParam {String} shopId 商品id
    *
    * @apiSuccessExample {json} Success response:
    *    {
    *        "status": 1,
    *        "msg": "删除成功",
    *    }
    * @apiSampleRequest http://59.110.226.77:3000/api/shopcar/del
  */
})

module.exports = router 