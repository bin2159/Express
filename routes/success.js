const express=require('express')
const router=express.Router()
const pages=require('../controllers/pages')
router.get('/',pages.success)
module.exports=router