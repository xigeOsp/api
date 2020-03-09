const users = ( model ) => {
  return {
    add ( data ) {
      return new Promise(( resolved,rejected ) => {

  
        // 入数据库 - 用户名不能重复注册 
        // 1. 先查询数据库
          model.find({},( err,docs ) => {
            // docs就是查到的结果
            // console.log("西阁: add -> docs", docs)
  
            const f = docs.some( item => item.username == data.username )
  
            if ( f ) {
              // true 有这个用户名了
              // 告诉前端用户名重复了
              resolved({
                status: 0,
                msg: '用户名已经存在，请重新命名'
              })
            } else {
              // false 没有这个用户名 -》 直接存
              const user = new model( data ) // 实例化模型得到实体
              user.save( err => {

                if ( !err ) {
                   console.log('add运行了' ) 
                  // 告诉前端注册成功
                  resolved({
                    status: 1,
                    msg: '注册成功'
                  })
                }
              })
            }
  
          })
      })

    },
    del () {

    },
    modify ( data ) {
      return new Promise(( resolved,rejected) => {
        model.findById( data.userId,( err,docs ) => {
          if ( docs === undefined ) {
            resolved({
              status: 0,
              msg: '您查询的用户id错误'
            })
            return 
          }
          for ( let  i in data ) {
            if( i == 'userId' ) {
              continue ;
            }
            docs[ i ] =  data[ i ]
          }
          docs.save( err => {
            if ( err ) {
              resolved({
                status: 2,
                msg: err.message
              })
            }
            resolved({
              status: 1,
              msg: '修改成功'
            })
          })
        })
      })
    },
    query ( data ) {
      return new Promise(( resolved,rejected ) => {
        // 用户名 密码比对 

        model.find({},( err,docs ) => {
          docs.map( item => {
            if ( (item.username == data.username && item.password == data.password) || ( item.phone == data.phone && item.password == data.password) ) {
              // 登录成功
              resolved({
                status: 1,
                userId: item._id,
                msg: '登录成功'
              })
              return ;
            } 
          })
          // 登录失败
          resolved({
            status: 0,
            msg: '用户名或是密码错误'
          })
        })
      })
    },
    userQuery ( name ) {
      return new Promise(( resolved,rejected ) => {
        model.find({},( error,docs ) => {
          const f = docs.some( item => item.username == name || item.phone == name || item.email == name )

          if ( f ) {
            // 有
            resolved({
              status: 1,
              msg: '有这个用户'
            })
          } else {
            resolved({
              status: 0,
              msg: '用户不存在'
            })
          }
        })
      })
    },
    passwordModify ( data ) {
      return new Promise(( resolved,rejected ) => {

        // console.log("西阁: passwordModify -> data", data)
        //data   用户名  新密码 
  
        const { name,newPassWord } = data 
  
        model.find({username: name},( err, docs ) => {
          // console.log("西阁: passwordModify -> docs", docs) 
          // docs[ 0 ].password = newPassWord
          const { _id } = docs[ 0 ]
          model.findById( _id, ( err,doc ) => {
          //  console.log("西阁: passwordModify -> doc", doc)
           doc.password = newPassWord 
           doc.save( err => {
             if ( err ) {
               rejected({
                 status: 0,
                 msg: err
               })
             } else {
               resolved({
                 status: 1,
                 msg: '修改成功'
               })
             }
           })
          })
        })
      })

    },
    getUserInfo ( data ) {
      return new Promise(( resolved,rejected ) => {
        model.findById( data.userId, ( err,docs ) => {
          if ( err ) {
            resolved({
              status: 0,
              msg: '查询失败',
              errReson: err.message
            }) 
            return ;
          }
          resolved({
            staus: 1,
            msg: '查询成功',
            data: {
              username: docs.username,
              phone: docs.phone
            }
          })
        })
      })
    }
  }
}

module.exports = users