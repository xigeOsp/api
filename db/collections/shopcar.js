const shopcar = ( model ) => {
  return {
    add ( data ) {
      return new Promise( async (resolved,rejected) => {
        const cars = await this.query()
        const shopCarInity = new model( data )
        if ( cars.data.length != 0 ) {
          const f = cars.data.some( item => item.shopId === data.shopId ) 
          if ( f ) {
            resolved({
              status: 0,
              msg: '同一商品'
            })
          } else {
            shopCarInity.save( err => {
              if ( err ) rejected({
                msg: err.message
              })
              resolved({
                status: 1,
                msg: '添加成功'
              })
            })
          }
        } else {
          shopCarInity.save( err => {
            if ( err ) rejected({
              msg: err.message
            })
            resolved({
              status: 1,
              msg: '添加成功'
            })
          })
        }
      })
    },
    del ( shopId ) {
      return new Promise(( resolved,rejected ) => {
        model.find({shopId},( err,docs ) => {
          if ( docs.length != 0 ) {
            const { _id } = docs[0]
            model.findById(_id,(err,doc) => {
              doc.remove( err => {
                if ( err ) rejected( err )
                resolved({
                  status: 1,
                  msg: '删除成功'
                })
              })
            })
          }
        })
      })
    },
    modify ({shopId,num }) {
      return new Promise(( resolved,rejected ) => {
        model.find({shopId},( err,docs ) => {
          if( docs.length != 0 ) {
            const { _id } = docs[0]
            model.findById( _id, ( err,doc ) => {
              doc.num = num 
              doc.save(err => {
                if ( err ) rejected( err ) 
                resolved({
                  status: 1,
                  msg: '更新成功'
                })
              })
            })
          }
        })
      })
    },
    query () {
      return new Promise(( resolved,rejected ) => {
        model.find({},( err,docs ) => {
          if( docs.length == 0 ) {
            resolved({
              status: 0,
              msg: '数据为空',
              data: docs
            })
          }
          resolved({
            status: 1,
            msg: '数据获取成功',
            data: docs 
          })
        })
      })
    }
  }
}

module.exports = shopcar