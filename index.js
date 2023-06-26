
const express=require('express')
const app=express()
const mysql=require('mysql')
const bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())

const router = require('./router/project.router')

app.use('/api',router)

app.listen(3000,()=>{
    console.log("server listen port at 3000")
})