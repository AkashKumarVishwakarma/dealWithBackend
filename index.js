require('dotenv').config()

const express = require('express')
const app = express() 

// const port = 4000  // this line will not work after .env file due to securety reson

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/login',(req,res)=>{
    res.send('Wellcome to login Page.')
})
app.get('/about',(req,res)=>{
    res.send("<h1>Hello my Self Akash, what i can do for you ?</h1>")
})
app.get('/contact',(req,res)=>{
    res.send("<h2>Email: akashkumargyn2002@gmail.com </br>Insta : alfa_akashcs </br>You-tube : codeground </br>Mo.no=7084785196</h2>")
})


app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})

console.log("Hello World")