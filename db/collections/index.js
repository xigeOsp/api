/* 
  * 统一暴露集合
*/
const users = require('./users')
const shops = require('./shops')
const members = require('./members')
const address = require('./address')
const shopcars = require('./shopcar')

module.exports = {
  users,
  shops,
  members,
  address,
  shopcars
}