const express=require("express");
const app=express();
const path=require("path");
const port=8080;

app.use(express.static(path.join(__dirname,"/public/css")));
app.use(express.static(path.join(__dirname,"/public/js")));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));


// this is for sending the ejs file
app.get("/",(req,res)=>{
    // res.send("this is root");
    res.render("home.ejs");
})


// this is get mothod for print hello
app.get("/hello",(req,res)=>{
    res.send("<h1>hello</h1>");
    // res.render("home.ejs");
})

// it will roll dice 
app.get("/rolldice",(req,res)=>{
    // res.send("<h1>hello</h1>");
    let valu=Math.floor(Math.random()*6)+1;
    // res.render("dice.ejs",{valu});
    //if else in ejs
    res.render("dice.ejs",{valu});

})
// for crating the insta gram username
// app.get("/ig/:username",(req,res)=>{
//     const followrs=["gaurav","shrutika","manisha"]
//     let {username}=req.params;  
//     res.render("insta.ejs",{username,followrs});
// })

//  this is new created for geting the data from the data.json
app.get("/ig/:username",(req,res)=>{
    let {username}=req.params;
      const instadata=require("./data.json");
      console.log(instadata);
      let data=instadata[username];
    res.render("insta.ejs",{data});
})

app.listen(port,()=>{
    console.log(`port is listening on ${port}`);
})

