const address = ( model ) => {
  return {
    add ( data ) {
      // ! 地址添加
      const { username,phone,address,flag } = data 
      return new Promise( async ( resolved,rejected ) => {

        //! 判断地址是否被重复添加

        const result = await this.query() 
        const f = result.data.some( item => item.address == address )
        if ( f ) {
          resolved({
            status: 2,
            msg: '地址重复添加'
          })
          return;
        } 
         
        const addressInity = new model({username,phone,address,flag})
        addressInity.save( err => {
          if ( err ) rejected({ status: 0, msg: err.message })
          resolved({
            status: 1,
            msg: '地址添加成功'
          })
        })
      })
    },
    del ( userId ) {
      return new Promise(( resolved,rejected ) => {
        model.findById( userId,( err,docs ) => {
         if ( !docs ) {
          resolved({ status: 0, msg: 'userId不存在'})
          return
         }
         docs.remove( err => {
           if ( err ) rejected({ status: 1, msg: '删除失败'})
           resolved({ status: 1,msg: '删除地址成功'})
         })
        })
      })
    },
    modify ( data ) {
      // console.log("西阁: modify -> data", data)
      return new Promise(( resolved,rejected ) => {
        model.findById( data.userId, ( err,docs ) => {
        // console.log("西阁: modify -> docs", docs)
          for ( var key in data ) {
            docs[ key ] = data[ key ]
          }
          docs.save( err => {
            if ( err ) rejected({ status: 1, msg: err.message })
            resolved({ status: 1,msg: '修改成功'})
          })
        })
      })
    },
    query ( username ) {
      return new Promise(( resolved,rejected ) => {
        model.find({ username },( err,docs ) => {
          if ( err ) rejected({ status: 0, msg: err.message })
          if (docs.length == 0 ) {
            resolved({ status: 2,msg: '用户名查询失败或是token验证失败', data: docs })
            return ;
          }
          resolved({ status: 1, msg: '获取地址列表成功', data: docs })
        })
      })
    }
  }
}

module.exports = address