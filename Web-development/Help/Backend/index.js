const express = require('express');
const app=express();
const path=require('path');

require('dotenv').config();

const port = process.env.PORT;
app.listen(8080,()=>{
    console.log('listening to the port 8080')
});
app.use(express.static(path.join(__dirname,'public')));// This is the best verison you can use. This will run even if you run it form the directory different from root directory.

app.get('/',(req,res)=>{
    res.send('HELLO WORLD')
})