const app=require('mongoose')
 const conn=app.connect('mongodb://localhost/mytime').then(()=>{
    console.log('database connected');
    console.log("Sorry Guys i just changed it")
 })

module.exports=app
