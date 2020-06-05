const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require("nodemailer");
const app = express();

// app.get('/', (req, res, next) => {
//     next('Error');
// });
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('public'));

// app.get('/test', (req, res, next) => {
//     next('');
// });

// app.get('/profile/:id/:name',(req, res, next) => {
//     res.send(`Hello, you are user with name ${req.params.name}, your  number is ${req.params.id}`);
// });
// app.get('/test', (req, res, next) => {
//     res.end("<h1>Hello!</h1>");
// });
// app.post('/test', (req, res, next) =>
// {
//     res.end(`You sent data: ${JSON.stringify(req.body, null, 4)}`)
// });


app.use('/form', (err, req, res, next) => {
    nodemailer.createTestAccount().then(acc => {
        return  nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
              user: acc.user, // generated ethereal user
              pass: acc.pass, // generated ethereal password
            },
          });
    }).then(transport => {
        transport.sendMail({
            from: '"Fred Foo 👻" <foo@example.com>', // sender address
            to: req.body.email, // list of receivers
            subject:  `You've got message from ${req.body.name}`, // Subject line
            text: req.body.message // plain text body
          });
        
        
    }).then(info => {
        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
      
        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        res.redirect('/');
    })
    
  });

app.listen(3000);