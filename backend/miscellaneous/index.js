const express=require("express");

const app=express();
const port=8080;
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.get("/get",(req,res)=>{
    let {username,pass}=req.query;
    console.log(req.body);
     res.send(`user id is ${username}user pass is ${pass}`);
})

app.post("/post",(req,res)=>{
    // let {username,pass}=req.query;
    // let info=req.body;
    // console.log(req.body);
    //  res.send(`user id is<strong>${info.username}</strong>user pass is<strong>${info.pass}</strong>`);
     let {username,pass}=req.body;
     console.log(req.body);
     res.send(`user id is<strong>${username}</strong>user pass is<strong>${pass}</strong>      `);
}) 

app.listen(port,()=>{
    console.log("rich out to the port");
})

