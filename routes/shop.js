const path=require('path')
const express=require('express')
const rootDir=require('../util/path')
const router=express.Router()
const product=require('../controllers/products')
router.get('/',product.shopProduct)
module.exports=router