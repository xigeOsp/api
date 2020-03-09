  const mongoose = require('mongoose')
  
  //2. 连接数据库
  // const databaseAddress = `mongodb://127.0.0.1:27017/数据库名称`
  const HOST = '59.110.226.77'
  const DATA_BASE_NAME = 'xige'
  const databaseAddress = `mongodb://${ HOST }:27017/${ DATA_BASE_NAME }`

  const connect = () => {
    mongoose.connect( databaseAddress, error => {
      if ( error ) {
        console.log(`数据库连接失败`)
      } else {
        console.log(`数据库连接成功`)
      }
    })
  }

  module.exports = connect