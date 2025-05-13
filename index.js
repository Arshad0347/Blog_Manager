require('dotenv').config();
const express =require('express');
const Blog = require('./blogManager');
const app = express();
const uuid = require('uuid');
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
//Create Blog Post 
app.get('/CreateBlog',(req,res)=>{
    // console.log(req.body);
const {title,body,author,views}=req.body;
const Blogs={
    id:uuid.v4(),
    title,
    body,
    author,
    views
}
Blog.push(Blogs);
res.send(Blog);
    
})


app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})