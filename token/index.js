const jwt = require('jsonwebtoken'); 

const fs = require('fs')

const path = require('path')

const private_key = fs.readFileSync(path.join( __dirname, './pem/private_key.pem'));

/* 生成token */
function creatToken(palyload){
    // 产生token
    palyload.ctime=Date.now()
    return jwt.sign(palyload,private_key)
}

/* token验证 */
function checkToken(token){
    return  new Promise((resolve,reject)=>{
        jwt.verify(token,private_key,(err,data)=>{
          if(err){ resolve({
              code: 0,
              msg: 'token验证失败',
              err: err.message
          })}
          resolve( data )
        })
    })
    
}


module.exports={
    creatToken,checkToken
}