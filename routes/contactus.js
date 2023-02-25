const path=require('path')
const express=require('express')
const router=express.Router()
const pages=require('../controllers/pages')
router.get('/',pages.getcontactus)
router.post('/',pages.postcontactus)
module.exports=router