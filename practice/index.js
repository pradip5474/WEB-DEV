const express = require("express");
const main = require("./server/db/db");
const {Model} = require("./server/db/schema");
const app=express();
const port=3000;
const path= require("path");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.set("views engine","ejs");
app.use(express.urlencoded({extended:true}));

main();

app.get("/",(req,res)=>{
     res.render("index.ejs");
})
app.post("/signup",(req,res)=>{
    const {username, password}=req.body;
    console.log(req.body)
    const user1= new Model({
        user:username,
        pass:password 
    });
    user1.save();
    res.send("<h1>Done</h1>")
})
app.listen(port,()=>{
    console.log(`listening on the port: ${port}`);
});