require('dotenv').config();
const express =require('express');
const Blog = require('./blogManager');
const app = express();
app.use(express.json());

//Blog Post Manager
//Features
//Create
//Read
//Update
//Delete
//Get all Posts
//Get Post by ID

app.get('/',(req,res)=>{
    res.send("Hello World");
})


app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})