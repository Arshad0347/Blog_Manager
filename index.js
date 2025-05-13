require('dotenv').config();
const express =require('express');
const Blog = require('./blogManager');
const app = express();
const uuid = require('uuid');
app.use(express.json());
let data=[]

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
app.post('/CreateBlog',(req,res)=>{
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
//Get Read
app.get('/Blog',(req,res)=>{
    res.json(data);
})
//Get All the Post
app.get("/AllPost",(req,res)=>{
    res.send(Blog)
})
//Get Post by ID
app.get("/Post/:id",(req,res)=>{
const Blogs=Blog.find((e)=>e.id===parseInt(req.params.id));
if(Blogs){
    res.send(Blogs);
}else{
    res.status(404).send("Post not found");
}
})

//Update the Post
app.put("/update/:id",(req,res)=>{
  const id=parseInt(req.params.id)
  const found=Blog.find((e)=>e.id===id);
  if (found){
    const updateBlog=Blog.find((e)=>e.id===id);
 updateBlog.title=req.body.title;
 updateBlog.body=req.body.body;
 updateBlog.author=req.body.author;
 updateBlog.views=req.body.views;
    res.send(updateBlog);
  }else{
    res.status(404).send("Post not found");
  }
    
})


app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})