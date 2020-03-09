// 1. 引入mongoose 
const mongoose = require('mongoose')

const connect = require('./connect')

connect() // 连接数据库

  
const {
  userModel,
  shopModel,
  memberModel,
  addressModel,
  shopcarModel
} = require('./model')


const {
  users,
  shops,
  members,
  address,
  shopcars
} = require ('./collections')


module.exports = {
  users: users( userModel ),
  shops: shops( shopModel ),
  members: members( memberModel ),
  address: address( addressModel ),
  shopcars: shopcars( shopcarModel )
}