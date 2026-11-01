const express = require('express');
require('dotenv').config()

const app = express()
const port = 3000
const localhost= "127.0.0.1";

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req,res) => {
    res.send("This is about page");
})

app.get('/contact', (req,res) => {
    res.send("This is contact page");
})

app.listen(localhost,port, () => {
  console.log(`Example app listening on port ${port}`)
})


console.log(`Hello ${process.env.HELLO}`)