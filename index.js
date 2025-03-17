require('dotenv').config()

const express=require('express')

const app=express()

const port=3000

app.get('/',(req,res)=>{
    res.send("Hello world!")
})

app.get('/login',(req,res)=>{
    res.send("Welcome sir/madam")
})

app.listen(port,()=>{
    console.log(`exmaple app listening on port ${port}`)
})

//This will work 
// app.listen(process.env.port || port,()=>{
//     console.log(`example app listening on port ${port}`)
// })