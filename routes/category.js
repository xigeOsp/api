const router = require('koa-router')()
const request = require('../utils/http')


router.prefix('/api/category')

//!获取分类列表
router.get('/', async (ctx, next) => {
  const categoryData = await request({
    url: `http://www.qinqin.net/index.php?r=class/category&type=1`
  })
  await ctx.render('category/index', {
    data: JSON.stringify( categoryData )
  })
  /**
    * @api {get} /api/category 获取分类列表
    * @apiVersion 1.0.0
    * @apiName category
    * @apiGroup Category
    *
    * @apiSuccessExample {json} Success response:
    *    {
    *        "status": 0,
    *        "data": "{[]}",
    *        "msg": ""
    *    }
    * @apiSampleRequest http://59.110.226.77:3000/api/category
  */
})


module.exports = router
