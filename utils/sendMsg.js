/** 
 * 引用sdk 
 */ 
const SMSClient = require('@alicloud/sms-sdk') 
const accessKeyId = 'xxx'//你自己在阿里云后台的accessKeyId 
const secretAccessKey = 'xxx'//secretAccessKey
var sendmsg = {}; 
/** 
 * 发送短信验证码 
 */ 
sendmsg.send = async (ctx, next) =>{ 
  const { phone } = ctx.request.query 
  var code=""; 
  for(var i=0;i<6;i++){ 
    code+=Math.floor(Math.random()*10) 
  } 
  //初始化sms_client 
  let smsClient = new SMSClient({accessKeyId, secretAccessKey}) 
  //发送短信 
  var s = await smsClient.sendSMS({ 
    PhoneNumbers: phone,//发送的电话号码 
    SignName: '西阁',//认证签名 
    TemplateCode: 'SMS_184115887',//模板id
    TemplateParam: '{"code":"'+code+'","product":"westCourt"}'//特别注意，这里的参数名 
  }) 
  if(s.Code=="OK"){ 
    ctx.body = {code :1,msg :code} 
  }else{ 
    ctx.body = {code :0} 
  } 
};

module.exports = sendmsg; 
