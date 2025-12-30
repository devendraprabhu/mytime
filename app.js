const live=require('express');
const app=live()
const db=require('./config/db');
const user=require('./module/schme');
app.use(live.static('publix'))
app.set('view engine','ejs')
app.use(live.json())
app.use(live.urlencoded({extended:true}))


app.get('/',(req,res)=>{
    res.render('index')
})
app.get('/register',(req,res)=>{
  res.render('index')
})
app.post('/register', async(req,res)=>{
     const {username,email,password}=req.body 
     const newUser=await user.create({
        name:username,
        email:email,
        password:password   }) .then(()=>{
            res.send('user registered')
            
        })
        console.log(newUser);
       

})




app.listen(3000)