const { default: mongoose } = require('mongoose')
const mogose=require('mongoose')
const Userschem=new mogose.Schema({
        name:String,
        email:String,
        password:String,
})
module.exports=mongoose.model('User',Userschem);
