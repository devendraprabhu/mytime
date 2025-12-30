const app=require('mongoose')
 const conn=app.connect('mongodb://localhost/mytime').then(()=>{
    console.log('database connected');
 })

module.exports=app
