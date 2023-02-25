const path=require('path')
const express = require('express')
const router=express.Router()
const product=require('../controllers/products')
router.get('/add-product',product.getAddProduct)
router.post("/add-product",product.postAddProduct)
module.exports=router