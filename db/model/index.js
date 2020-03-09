const mongoose = require('mongoose')
const {
  userSchema,
  shopSchema,
  memberSchema,
  addressSchema,
  shopcarSchema
} = require('../schema')

const modelHandler = (collectionName,schema ) => {
  return mongoose.model( collectionName, schema )
}

const userModel = modelHandler('users',userSchema)
const shopModel = modelHandler('shops',shopSchema)
const memberModel = modelHandler('members',memberSchema)
const addressModel = modelHandler('addresss',addressSchema)
const shopcarModel = modelHandler('shopcars',shopcarSchema)


module.exports = {
  userModel,
  shopModel,
  memberModel,
  addressModel,shopcarModel
}