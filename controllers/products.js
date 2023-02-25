const Product=require('../model/product')
const path=require('path')
exports.getAddProduct=(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','add-product.htm'))
}
exports.postAddProduct=(req,res,next)=>{
    // const title=new Product(req.body.title)
    // title.save()
    res.redirect('/shop')
}
exports.shopProduct=(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','shop.htm'))
}