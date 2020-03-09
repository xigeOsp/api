define({ "api": [
  {
    "type": "post",
    "url": "/api/address/add",
    "title": "添加地址接口",
    "version": "1.0.0",
    "name": "add",
    "group": "Address",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>收件人电话</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>收件人地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "defaultAddress",
            "description": "<p>默认地址（ 1是0不是 ）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n \"status\": 1,\n \"msg\": \"地址添加成功\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"code\": 0,\n  \"msg\": \"token验证失败\",\n  \"err\": \"invalid token\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://59.110.226.77:3000/api/address/add"
      }
    ],
    "filename": "routes/address.js",
    "groupTitle": "Address"
  },
  {
    "type": "get",
    "url": "/api/address/city",
    "title": "当前城市定位",
    "version": "1.0.0",
    "name": "city",
    "group": "Address",
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n    \"pinyin\": \"hangzhou\",\n    \"is_map\": true,\n    \"longitude\": 120.155151,\n    \"latitude\": 30.274151,\n    \"sort\": 8,\n    \"area_code\": \"0571\",\n    \"abbr\": \"HZ\",\n    \"name\": \"杭州\",\n    \"id\": 2\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"code\": 0,\n  \"msg\": \"定位失败\",\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://59.110.226.77:3000/api/address/city"
      }
    ],
    "filename": "routes/address.js",
    "groupTitle": "Address"
  },
  {
    "type": "post",
    "url": "/api/address/del",
    "title": "删除地址",
    "version": "1.0.0",
    "name": "del",
    "group": "Address",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n \"status\": 1,\n \"msg\": \"删除地址成功\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"code\": 0,\n  \"msg\": \"userId不存在或是token验证失败\",\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://59.110.226.77:3000/api/address/del"
      }
    ],
    "filename": "routes/address.js",
    "groupTitle": "Address"
  },
  {
    "type": "get",
    "url": "/api/address",
    "title": "获取地址列表接口",
    "version": "1.0.0",
    "name": "get",
    "group": "Address",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n    \"status\": 1,\n    \"msg\": \"获取地址列表成功\",\n    \"data\": [\n        {\n            \"_id\": \"5e55e1b3e70d0afc8c0ee5f5\",\n            \"username\": \"yinmaomao\",\n            \"phone\": \"17621603915\",\n            \"address\": \"山西太原\",\n            \"flag\": \"1\",\n            \"__v\": 0\n        },\n        {\n            \"_id\": \"5e55e3777c0449b1d9d91af5\",\n            \"username\": \"yinmaomao\",\n            \"phone\": \"17621603915\",\n            \"address\": \"浙江杭州\",\n            \"flag\": \"1\",\n            \"__v\": 0\n        },\n        {\n            \"_id\": \"5e5723c7ff53b6b8b1385f1b\",\n            \"username\": \"yinmaomao\",\n            \"phone\": \"17621603915\",\n            \"address\": \"浙江杭州\",\n            \"flag\": \"1\",\n            \"__v\": 0\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"status\": 2,\n    \"msg\": \"用户名或是token验证失败\",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://59.110.226.77:3000/api/address"
      }
    ],
    "filename": "routes/address.js",
    "groupTitle": "Address"
  },
  {
    "type": "get",
    "url": "/api/address/search",
    "title": "模糊地址搜索",
    "version": "1.0.0",
    "name": "search",
    "group": "Address",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>搜索类型【默认search】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city_id",
            "description": "<p>城市id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>搜索关键字</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "[\n  {\n    \"name\": \"九堡[地铁站]\",\n    \"address\": \"地铁1号线\",\n    \"latitude\": 30.307717,\n    \"longitude\": 120.266319,\n    \"geohash\": \"30.307717,120.266319\"\n  },\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"code\": 0,\n  \"msg\": \"获取失败\",\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://59.110.226.77:3000/api/address/search"
      }
    ],
    "filename": "routes/address.js",
    "groupTitle": "Address"
  },
  {
    "type": "post",
    "url": "/api/address/update",
    "title": "修改地址",
    "version": "1.0.0",
    "name": "update",
    "group": "Address",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>收件人电话</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>收件人地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "defaultAddress",
            "description": "<p>默认地址（ 1是0不是 ）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n \"status\": 1,\n \"msg\": \"修改地址成功\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"code\": 0,\n  \"msg\": \"token验证失败\",\n  \"err\": \"invalid token\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://59.110.226.77:3000/api/address/update"
      }
    ],
    "filename": "routes/address.js",
    "groupTitle": "Address"
  },
  {
    "type": "get",
    "url": "/api/category",
    "title": "获取分类列表",
    "version": "1.0.0",
    "name": "category",
    "group": "Category",
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n    \"status\": 0,\n    \"data\": \"{[]}\",\n    \"msg\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://59.110.226.77:3000/api/category"
      }
    ],
    "filename": "routes/category.js",
    "groupTitle": "Category"
  },
  {
    "type": "get",
    "url": "/api/lst/hot",
    "title": "获取人气商品列表",
    "version": "1.0.0",
    "name": "hot",
    "group": "List",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cid",
            "description": "<p>商品cid</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n    \"status\": 0,\n    \"data\": \"{[]}\",\n    \"msg\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://59.110.226.77:3000/api/list/hot"
      }
    ],
    "filename": "routes/list.js",
    "groupTitle": "List"
  },
  {
    "type": "get",
    "url": "/api/lst/latest",
    "title": "获取最新商品列表",
    "version": "1.0.0",
    "name": "latest",
    "group": "List",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cid",
            "description": "<p>商品cid</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n    \"status\": 0,\n    \"data\": \"{[]}\",\n    \"msg\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://59.110.226.77:3000/api/list/latest"
      }
    ],
    "filename": "routes/list.js",
    "groupTitle": "List"
  },
  {
    "type": "get",
    "url": "/api/lst/price",
    "title": "获取价格排序商品列表",
    "version": "1.0.0",
    "name": "price",
    "group": "List",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cid",
            "description": "<p>商品cid</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n    \"status\": 0,\n    \"data\": \"{[]}\",\n    \"msg\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://59.110.226.77:3000/api/list/price"
      }
    ],
    "filename": "routes/list.js",
    "groupTitle": "List"
  },
  {
    "type": "get",
    "url": "/api/lst/sell",
    "title": "获取销量排名商品列表",
    "version": "1.0.0",
    "name": "sell",
    "group": "List",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cid",
            "description": "<p>商品cid</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n    \"status\": 0,\n    \"data\": \"{[]}\",\n    \"msg\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://59.110.226.77:3000/api/list/sell"
      }
    ],
    "filename": "routes/list.js",
    "groupTitle": "List"
  },
  {
    "type": "post",
    "url": "/api/shopcar/add",
    "title": "添加购物车",
    "version": "1.0.0",
    "name": "add",
    "group": "Shopcar",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imgRul",
            "description": "<p>图片url</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "d_title",
            "description": "<p>商品主题</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": "<p>价格</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "oringinal",
            "description": "<p>原价</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sales",
            "description": "<p>销量</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": "<p>评论数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "num",
            "description": "<p>商品数量</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "shopId",
            "description": "<p>商品id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n    \"status\": 1,\n    \"msg\": \"商品添加购物车成功\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n    \"status\": 0,\n    \"msg\": \"商品添加购物车失败或是token验证失败\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://59.110.226.77:3000/api/shopcar/add"
      }
    ],
    "filename": "routes/shopcar.js",
    "groupTitle": "Shopcar"
  },
  {
    "type": "post",
    "url": "/api/shopcar/del",
    "title": "删除购物车中某一条数据",
    "version": "1.0.0",
    "name": "del",
    "group": "Shopcar",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "shopId",
            "description": "<p>商品id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n    \"status\": 1,\n    \"msg\": \"删除成功\",\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://59.110.226.77:3000/api/shopcar/del"
      }
    ],
    "filename": "routes/shopcar.js",
    "groupTitle": "Shopcar"
  },
  {
    "type": "get",
    "url": "/api/shopcar/getCar",
    "title": "获取购物车列表",
    "version": "1.0.0",
    "name": "getCar",
    "group": "Shopcar",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n    \"status\": 1,\n    \"msg\": \"获取购物车列表成功\",\n    \"data\": \"[{}]\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n    \"status\": 0,\n    \"msg\": \"获取失败\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://59.110.226.77:3000/api/shopcar/getCar"
      }
    ],
    "filename": "routes/shopcar.js",
    "groupTitle": "Shopcar"
  },
  {
    "type": "get",
    "url": "/api/shopcar/update",
    "title": "更新购物车",
    "version": "1.0.0",
    "name": "update",
    "group": "Shopcar",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "num",
            "description": "<p>商品数量</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "shopId",
            "description": "<p>商品id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n    \"status\": 1,\n    \"msg\": \"更新成功\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n    \"status\": 0,\n    \"msg\": \"更新失败\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://59.110.226.77:3000/api/shopcar/update"
      }
    ],
    "filename": "routes/shopcar.js",
    "groupTitle": "Shopcar"
  },
  {
    "type": "get",
    "url": "/api/user/getInfo",
    "title": "获取用户信息接口",
    "version": "1.0.0",
    "name": "getInfo",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n    \"staus\": 1,\n    \"msg\": \"查询成功\",\n    \"data\": {\n        \"username\": \"yyb\",\n        \"phone\": \"17621603915\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"code\": 0,\n    \"msg\": \"token验证失败\",\n    \"err\": \"invalid token\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://59.110.226.77:3000/api/user/getInfo"
      }
    ],
    "filename": "routes/users.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/user/login",
    "title": "登录接口",
    "version": "1.0.0",
    "name": "login",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n \"status\": 1,\n \"msg\": \"登录成功\",\n \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Inl5YiIsInBhc3N3b3JkIjoieXliMTIzIiwiY3RpbWUiOjE1ODIyODk0MjU2NTQsImlhdCI6MTU4MjI4OTQyNX0.-2pV6kR39zsWyPoViM9vhZxxOGNs-uzKj5GFL6JYkWA\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"status\": 0,\n    \"msg\": \"用户名或是密码错误\",\n    \"token\": false\n      }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://59.110.226.77:3000/api/user/login"
      }
    ],
    "filename": "routes/users.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/user/register",
    "title": "注册接口",
    "version": "1.0.0",
    "name": "register",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n    \"status\": 1,\n    \"msg\": \"注册成功\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"status\": 0,\n    \"msg\": \"用户名已经存在，请重新命名\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://59.110.226.77:3000/api/user/register"
      }
    ],
    "filename": "routes/users.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/user/sendCaptcha",
    "title": "短信验证码接口",
    "version": "1.0.0",
    "name": "sendCaptcha",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>手机号</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n    \"code\": 1,\n    \"msg\": \"466362\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://59.110.226.77:3000/api/user/sendCaptcha"
      }
    ],
    "filename": "routes/users.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/user/update",
    "title": "修改用户信息接口",
    "version": "1.0.0",
    "name": "update",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>手机号</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n    \"staus\": 1,\n    \"msg\": \"修改成功\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"code\": 0,\n    \"msg\": \"您查询的用户id错误\",\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://59.110.226.77:3000/api/user/update"
      }
    ],
    "filename": "routes/users.js",
    "groupTitle": "User"
  }
] });
