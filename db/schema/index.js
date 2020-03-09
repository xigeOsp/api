const mongoose = require('mongoose')
const schemaHandler = ( options ) => {
  return new mongoose.Schema( options )
}

const userSchema = schemaHandler({
  username: String,
  password: String,
  phone: String,
  email: String
})

const shopSchema = schemaHandler({
  shopName: String
})

const memberSchema = schemaHandler({
  memberName: String,
  memberPassWord: String 
})

const addressSchema = schemaHandler({
  username: String,
  phone: String,
  address: String,
  flag: String
})

const shopcarSchema = schemaHandler({
  imgUrl: String,
  d_title: String,
  price: String,
  originalPrice: String,
  sales: String,
  comment: String,
  num: String,
  shopId: String
})

module.exports = {
  userSchema,
  shopSchema,
  memberSchema,
  addressSchema,
  shopcarSchema
}