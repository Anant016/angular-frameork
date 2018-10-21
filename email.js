const nodemailer = require('nodemailer');
const xoauth2=require('xoauth2');
// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing
nodemailer.createTestAccount((err, account) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
       srvice:'gmail',

        auth: {
            xoauth2:xoauth2.createXOAuth2Generator({
                user: 'anantrungta1999@gmail.com',
            clientId:'',
            clientSecret:'',
            refreshToken=''
            })
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: 'Anant <anantrungta1999@gmail.com>', // sender address
        to: 'romedy65i@gmail.com', // list of receivers
        subject: 'Hello Anu', // Subject line
        text: 'Hello world!', // plain text body
        html: '<b>Hello world?</b>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
});
