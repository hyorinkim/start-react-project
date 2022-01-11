const nodemailer = require('nodemailer');
const email={//smtp mail 계정 정보 , 메일을 보내는 서버, 관리자 계급의 계정이 있어야한다.
    //메일 서버 대행 서비스 mailtrap.io
    "host":,
    "post":,
    "secure":,
}
const send= async(option)=>{
    nodemailer.createTransport(email)
}