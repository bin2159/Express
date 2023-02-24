const path=require('path')
const express=require('express')
const router=express.Router()
router.get('/',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','success.htm'))
})
module.exports=router