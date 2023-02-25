const path=require('path')
exports.getcontactus=(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','contactus.htm'))
}
exports.postcontactus=(req,res,next)=>{
    res.redirect('/success')
}
exports.success=(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','success.htm'))
}