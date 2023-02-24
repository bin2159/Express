const path=require('path')
const express=require('express')
const router=express.Router()
router.get('/',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','contactus.htm'))
})
router.post('/',(req,res,next)=>{
    res.redirect('/success')
})
module.exports=router