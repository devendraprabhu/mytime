const app=require('mongoose')
 const conn=app.connect('mongodb://localhost/mytime').then(()=>{
    console.log('database connected');
    console.log("I Changed this People")
 })

module.exports=app
