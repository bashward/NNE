const express=require('express')
const cors=require('cors')
const nodemailer=require('nodemailer')
require('dotenv').config()
const app=express()

app.use(express.urlencoded({extended: true}))
app.use(cors())
console.log(process.env.SENDGRID_API_KEY)
const transporter=nodemailer.createTransport({
  host: "smtp.sendgrid.net",
  port: 465,
  secure: true,
  auth: {
    user: "apikey",
    pass: process.env.SENDGRID_API_KEY
  },
})

app.post('/send',(req,res)=>{

  const name=req.body.Name
  const number=req.body.PNumber
  const query=req.body.Query
  
  const sendmail=async ()=>{

    try {
      const info=await transporter.sendMail({
        from: '"NNEWEB" <thefootyguy07@gmail.com>',
        to: "nikhilt626@gmail.com",
        subject: 'New Website Query',
        text: `New Query from ${name} , ${number} for ${query}`
      })
      
      return info
    } catch (err) {
      console.log(err)
      res.send('Sorry! Your request cannot be processed.')
    }
   

  }

sendmail().then((info)=>{
console.log(info.messageId)
if(info.messageId) res.send('Sent!')
})

//sales@nnelectronics.org

})


app.listen(3001 || process.env.port,(req,res)=>{
    console.log('Server working!')
})