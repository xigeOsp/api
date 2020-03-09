/* 
  User的五个接口，分别为： 修改个人中心【 post 】、发送短信验证码[ get ]、注册接口[ post ]、登录接口[ post ]、获取用户信息[ get ]
*/
const router = require('koa-router')()

const { users } = require('../db')

const sendMsg = require('../utils/sendMsg')

const {
  creatToken,checkToken
} = require('../token')

router.prefix('/api/user')

/* 修改用户信息 */
router.post('/update', async ( ctx,next ) => {
  const result = await users.modify( ctx.request.body )
  await ctx.render('user/user_update',{
    data: JSON.stringify( result )
  })
    /**
    * @api {post} /api/user/update 修改用户信息接口
    * @apiVersion 1.0.0
    * @apiName update
    * @apiGroup User
    *
    * @apiParam {String} userId 用户id
    * @apiParam {String} username 用户名 
    * @apiParam {String} phone 手机号 
    * 
    *
    *
    * @apiSuccessExample {json} Success response:
    *  {
    *      "staus": 1,
    *      "msg": "修改成功",
    *  }
     *
     * @apiErrorExample {json} Error-Response:
     *   {
     *       "code": 0,
     *       "msg": "您查询的用户id错误",
     *   }
    * @apiSampleRequest http://59.110.226.77:3000/api/user/update
  */
})
/* 发送验证码 */

/**
    * @api {get} /api/user/sendCaptcha 短信验证码接口
    * @apiVersion 1.0.0
    * @apiName sendCaptcha
    * @apiGroup User
    * @apiParam {String} phone 手机号
    *
    * @apiSuccessExample {json} Success response:
    *    {
    *        "code": 1,
    *        "msg": "466362"
    *    }
    * @apiSampleRequest http://59.110.226.77:3000/api/user/sendCaptcha
  */

router.get('/sendCaptcha',sendMsg.send)
/* 注册 */
router.post('/register',async ( ctx,next ) => {
  // 通过 ctx.request.body 来获取数据
  const result = await users.add( ctx.request.body  )
  console.log("西阁: ctx.request.body", ctx.request.body)
  ctx.body = result
  /**
    * @api {post} /api/user/register 注册接口
    * @apiVersion 1.0.0
    * @apiName register
    * @apiGroup User
    *
    * @apiParam {String} username 用户名
    * @apiParam {String} phone 手机号
    * @apiParam {String} password 密码
    *
    *
    * @apiSuccessExample {json} Success response:
    *    {
    *        "status": 1,
    *        "msg": "注册成功"
    *    }
     *
     * @apiErrorExample {json} Error-Response:
     *   {
     *       "status": 0,
     *       "msg": "用户名已经存在，请重新命名"
     *   }
    * @apiSampleRequest http://59.110.226.77:3000/api/user/register
  */
   
})
/* 登录 */
router.post('/login',async ( ctx,next ) => {
  console.log( ctx.request.body )
  const result = await users.query( ctx.request.body )
  const token = creatToken( ctx.request.body )
  await ctx.render('user/user_login',{
    data: JSON.stringify({
      ...result,
      token: result.status == 1 && token 
    })
  })
  
   /**
    * @api {post} /api/user/login 登录接口
    * @apiVersion 1.0.0
    * @apiName login
    * @apiGroup User
    *
    * @apiParam {String} username 用户名
    * @apiParam {String} password 密码
    *
    *
    * @apiSuccessExample {json} Success response:
     *     {
     *      "status": 1,
     *      "msg": "登录成功",
     *      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Inl5YiIsInBhc3N3b3JkIjoieXliMTIzIiwiY3RpbWUiOjE1ODIyODk0MjU2NTQsImlhdCI6MTU4MjI4OTQyNX0.-2pV6kR39zsWyPoViM9vhZxxOGNs-uzKj5GFL6JYkWA"
     *     }
     *
     * @apiErrorExample {json} Error-Response:
     *     {
     *         "status": 0,
     *         "msg": "用户名或是密码错误",
     *         "token": false
          }
    * @apiSampleRequest http://59.110.226.77:3000/api/user/login
  */
})
/* 获取用户信息 */
router.get('/getInfo',async ( ctx,next ) => {
  let result = {}
  const { token } = ctx.request.query
  const checkTokenInfo = await checkToken( token )
  if ( checkTokenInfo.code == 0 ) {
    result = checkTokenInfo 
  } else {
    result = await users.getUserInfo( ctx.request.query )
  }
  await ctx.render('user/user_getInfo',{
    data: JSON.stringify({
      ...result,
    })
  })
  /**
    * @api {get} /api/user/getInfo 获取用户信息接口
    * @apiVersion 1.0.0
    * @apiName getInfo
    * @apiGroup User
    *
    * @apiParam {String} userId 用户id
    * @apiParam {String} token token
    *
    *
    * @apiSuccessExample {json} Success response:
    *  {
    *      "staus": 1,
    *      "msg": "查询成功",
    *      "data": {
    *          "username": "yyb",
    *          "phone": "17621603915"
    *      }
    *  }
     *
     * @apiErrorExample {json} Error-Response:
     *   {
     *       "code": 0,
     *       "msg": "token验证失败",
     *       "err": "invalid token"
     *   }
    * @apiSampleRequest http://59.110.226.77:3000/api/user/getInfo
  */
})

module.exports = router
