// 1. 引入mongoose 
const mongoose = require('mongoose')


  
  //2. 连接数据库
  // const databaseAddress = `mongodb://127.0.0.1:27017/数据库名称`
  const HOST = '127.0.0.1'
  const DATA_BASE_NAME = 1911
  const databaseAddress = `mongodb://${ HOST }:27017/${ DATA_BASE_NAME }`
  mongoose.connect( databaseAddress, error => {
    if ( error ) {
      console.log(`数据库连接失败`)
    } else {
      console.log(`数据库连接成功`)
    }
  })

  // 3. 创建一个骨架 -> 定义字段 
  const userSchema = new mongoose.Schema({
    username: String,
    password: String
  })

  const shopSchema = new mongoose.Schema({
    shopName: String
  })

  const memberSchema = new mongoose.Schema({
    memberName: String,
    memberPassWord: String 
  })


  //4. 创建模型 -> 一个骨架对应一个模型  mongoose.model( 集合名称【复数】, 骨架 )
    const userModel = mongoose.model('users',userSchema)
    const shopModel = mongoose.model('shops',shopSchema)
    const memberModel = mongoose.model('members',memberSchema)


const db = {
  users: {
    add () {
      console.log('users-add执行')
    },
    del () {},
    modify () {},
    query () {}
  },
  shops: {
    add () {},
    del () {},
    modify () {},
    query () {}
  },
  members: {
    add () {},
    del () {},
    modify () {},
    query () {}
  }
}


module.exports = db 