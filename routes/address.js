const http = require('http')

const router = require('koa-router')()

const { address } = require('../db')

const { checkToken } = require('../token')

const request = require('../utils/http')

router.prefix('/api/address')

// !修改地址
router.post('/update', async ( ctx,next ) => {
  let result = {}
  const { token } = ctx.request.body 
  const checkTokenInfo = await checkToken( token )
  if ( checkTokenInfo.code == 0 ) {
    result = checkTokenInfo 
  } else {
    result = await address.modify( ctx.request.body )
  }
  await ctx.render('address/index',{
    data: JSON.stringify( result )
  })

 
   /**
    * @api {post} /api/address/update 修改地址
    * @apiVersion 1.0.0
    * @apiName update
    * @apiGroup Address
    *
    * @apiParam {String} username 用户名
    * @apiParam {String} phone 收件人电话
    * @apiParam {String} address 收件人地址
    * @apiParam {String} userId   用户ID
    * @apiParam {String} defaultAddress 默认地址（ 1是0不是 ）     
    * @apiParam {String} token token    
    *
    *
    * @apiSuccessExample {json} Success response:
     *     {
     *      "status": 1,
     *      "msg": "修改地址成功",
     *     }
     *
     * @apiErrorExample {json} Error-Response:
     * {
     *   "code": 0,
     *   "msg": "token验证失败",
     *   "err": "invalid token"
     * }
    * @apiSampleRequest http://59.110.226.77:3000/api/address/update
  */

})

// !获取地址列表
router.get('/', async ( ctx,next ) => {
  let result = {}
  const { token,username } = ctx.request.query 
  const checkTokenInfo = await checkToken( token )
  if ( checkTokenInfo.code == 0 ) {
    result = checkTokenInfo 
  } else {
    result = await address.query( username )
  }
  await ctx.render('address/index',{
    data: JSON.stringify( result )
  })

    /**
    * @api {get} /api/address 获取地址列表接口
    * @apiVersion 1.0.0
    * @apiName get
    * @apiGroup Address
    *
    * @apiParam {String} username 用户名
    * @apiParam {String} token   token
    *
    * @apiSuccessExample {json} Success response:
     *  {
     *      "status": 1,
     *      "msg": "获取地址列表成功",
     *      "data": [
     *          {
     *              "_id": "5e55e1b3e70d0afc8c0ee5f5",
     *              "username": "yinmaomao",
     *              "phone": "17621603915",
     *              "address": "山西太原",
     *              "flag": "1",
     *              "__v": 0
     *          },
     *          {
     *              "_id": "5e55e3777c0449b1d9d91af5",
     *              "username": "yinmaomao",
     *              "phone": "17621603915",
     *              "address": "浙江杭州",
     *              "flag": "1",
     *              "__v": 0
     *          },
     *          {
     *              "_id": "5e5723c7ff53b6b8b1385f1b",
     *              "username": "yinmaomao",
     *              "phone": "17621603915",
     *              "address": "浙江杭州",
     *              "flag": "1",
     *              "__v": 0
     *          }
     *      ]
     *  }
     *
     * @apiErrorExample {json} Error-Response:
     * {
     *     "status": 2,
     *     "msg": "用户名或是token验证失败",
     *     "data": []
     * }
    * @apiSampleRequest http://59.110.226.77:3000/api/address
  */

})

// ! 删除地址

router.post('/del',async ( ctx,next ) => {
  let result = {}
  const { token,userId } = ctx.request.body 
  const checkTokenInfo = await checkToken( token )
  if ( checkTokenInfo.code == 0 ) {
    result = checkTokenInfo 
  } else {
    result = await address.del( userId )
  }
  await ctx.render('address/index',{
    data: JSON.stringify( result )
  })

    /**
    * @api {post} /api/address/del 删除地址
    * @apiVersion 1.0.0
    * @apiName del
    * @apiGroup Address
    *
    * @apiParam {String} userId   用户ID
    * @apiParam {String} token token    
    *
    *
    * @apiSuccessExample {json} Success response:
     *     {
     *      "status": 1,
     *      "msg": "删除地址成功",
     *     }
     *
     * @apiErrorExample {json} Error-Response:
     * {
     *   "code": 0,
     *   "msg": "userId不存在或是token验证失败",
     * }
    * @apiSampleRequest http://59.110.226.77:3000/api/address/del
  */

})

// ! 添加地址

router.post('/add',async ( ctx,next ) => {

  const { token } = ctx.request.body 

  let result = {}

  const checkTokenInfo = await checkToken( token )

  if ( checkTokenInfo.code == 0 ) {
    result = checkTokenInfo 
  } else {
    result = await address.add( ctx.request.body ) 
  }

  /**
    * @api {post} /api/address/add 添加地址接口
    * @apiVersion 1.0.0
    * @apiName add
    * @apiGroup Address
    *
    * @apiParam {String} username 用户名
    * @apiParam {String} phone 收件人电话
    * @apiParam {String} address 收件人地址
    * @apiParam {String} userId   用户ID
    * @apiParam {String} defaultAddress 默认地址（ 1是0不是 ）     
    * @apiParam {String} token token    
    *
    *
    * @apiSuccessExample {json} Success response:
     *     {
     *      "status": 1,
     *      "msg": "地址添加成功",
     *     }
     *
     * @apiErrorExample {json} Error-Response:
     * {
     *   "code": 0,
     *   "msg": "token验证失败",
     *   "err": "invalid token"
     * }
    * @apiSampleRequest http://59.110.226.77:3000/api/address/add
  */
  await ctx.render('address/index',{
    data: JSON.stringify( result )
  })
})


// ! 模糊地址搜索

router.get('/search',async ( ctx,next ) => {
  const { type,city_id,keyword } = ctx.request.query 
  const result = await request({
    url: `http://elm.cangdu.org/v1/pois?type=${ type }&city_id=${ city_id }&keyword=${ keyword }`
  })
  ctx.body = result 
  /**
    * @api {get} /api/address/search 模糊地址搜索
    * @apiVersion 1.0.0
    * @apiName search
    * @apiGroup Address
    *
    * @apiParam {String} type 搜索类型【默认search】
    * @apiParam {String} city_id 城市id
    * @apiParam {String} keyword 搜索关键字

    * @apiSuccessExample {json} Success response:
    *  [
    *    {
    *      "name": "九堡[地铁站]",
    *      "address": "地铁1号线",
    *      "latitude": 30.307717,
    *      "longitude": 120.266319,
    *      "geohash": "30.307717,120.266319"
    *    },
    *  ]
     *
     * @apiErrorExample {json} Error-Response:
     * {
     *   "code": 0,
     *   "msg": "获取失败",
     * }
    * @apiSampleRequest http://59.110.226.77:3000/api/address/search
  */
})


//! 当前所在地定位

router.get('/city', async ( ctx,next ) => {
  const result = await request({
    url: 'http://elm.cangdu.org/v1/cities?type=guess'
  })
  ctx.body = result 
  /**
    * @api {get} /api/address/city 当前城市定位
    * @apiVersion 1.0.0
    * @apiName city
    * @apiGroup Address
    *
    *
    * @apiSuccessExample {json} Success response:
    *  {
    *      "pinyin": "hangzhou",
    *      "is_map": true,
    *      "longitude": 120.155151,
    *      "latitude": 30.274151,
    *      "sort": 8,
    *      "area_code": "0571",
    *      "abbr": "HZ",
    *      "name": "杭州",
    *      "id": 2
    *  }
     *
     * @apiErrorExample {json} Error-Response:
     * {
     *   "code": 0,
     *   "msg": "定位失败",
     * }
    * @apiSampleRequest http://59.110.226.77:3000/api/address/city
  */
})



module.exports = router
