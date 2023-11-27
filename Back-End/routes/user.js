const express =require('express')
const connection  = require('../connection')
const router = express.Router()  
const nodemailer = require('nodemailer')
const jwt = require('jsonwebtoken')
require('dotenv').config()


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

router.post('/register', (req, res)=>{
    let user = req.body
   query = "select email from user where email=?"
   connection.query(query,[user.email],(err, results) =>{
    if(!err){
        if(results.length <= 0){
            query = "insert into user (name, contactNumber, email, password, status, role) values (?,?,?,?, 'false','user')"
            connection.query(query,[user.username, user.contactNumber, user.email, user.password],(err, results) => {
                if(!err){
                    return res.status(200).json({message: 'Registered Successfully.'})
                }
                else{
                    return res.status(500).json(err)
                }
            })
        }
        else{
            return res.status(400).json({message: 'Email Already Exist.'})
        }

    }
    else{
        return res.status(500).json(err)
    }
   })

})

router.post('/login',(req, res) => {
    const user = req.body
    query = "select email, password, status, role from user where email=?"
    connection.query(query,[user.email],(err, results) => {
        if(!err){
            if(results.length <= 0 || results[0].password != user.password){
                return res.status(401).json({message: 'Incorrect email/password'})
            }
            else if(results[0].status ==='false'){
                return res.status(401).json({message: 'Wait for Admin Approval'})
            }
            else if(results[0].password == user.password){
                const payLoad = {
                    email: results[0].email,
                    role: results[0].role
                }
                const accessToken = jwt.sign(payLoad, process.env.SECRET_KEY,{expiresIn: '2h'})
                return res.status(200).json({token: accessToken, role: payLoad.role})
            }
            else{
                return res.status(400).json({message:'Something Went Wrong!'})
            }
        }
        else{
            return res.status(500).json(err)
        }
    })
})


module.exports = router