const express =require('express')
const connection  = require('../connection')
const router = express.Router()  
const nodemailer = require('nodemailer')



let savedOTP = {
    email: '',
    otp: ''
} ;
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
})
router.post('/getOtp',(req, res) => {
    const user = req.body
    console.log("Email in server: +", user['email'])
    var otp = Math.floor(100000 + Math.random() * 900000)
    var mailOptions = {
        from: process.env.EMAIL,
        to: user['email'],
        subject: 'OTP for KiranaKottu Login...',
        html: "<p><b>OTP: </b><h1>"+otp+"</h1></p>"    
    }
    transporter.sendMail(mailOptions, (err, result)=>{
        if(err){
            console.log(err)
            res.status(401).json({message: 'Invalid Email address'})
        }
        else{
            savedOTP.email = user['email'] 
            savedOTP.otp = otp
            setTimeout(()=>{
                delete savedOTP
            }, 60000)
            return res.status(200).json({message: 'OTP sent to your gmail.'})
        }
    })

})


router.post('/verifyOTP', (req,res) => {
    var otpReceived = req.body.otp
    var email = req.body.email
    console.log("Email and OTP at Server: ", savedOTP)
    if(savedOTP.email == email && savedOTP.otp == otpReceived){
        return res.status(200).json({message: 'Verified'})
    }
    else{
        return res.status(401).json({message: 'Invalid OTP'})
    }
})
module.exports = router