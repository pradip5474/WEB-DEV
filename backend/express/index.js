const express = require('express');
let app= express();

// console.log(app);

let port=  8080;//8080
app.listen(port,()=>{
    console.log(`app is listening on port${port}`);
})

// app.get("/",(req,res)=>{
//     res.send("you are in root path  ");
// })


app.get("/",(req,res)=>{
    let {q}=req.query;
    if (!q) {
        res.send("<h1>does not exist</h1>")
    }
    console.log();
    res.send(`<h1>this is your query </h1>`);
})

// app.get("/:username/:RollNo",(req,res)=>{
//     res.send("you are in root path after changing");
//     console.log(req.params);
// })

// app.get("/:username/:RollNo",(req,res)=>{
//     let {username,RollNo}= req.params;
    
//     res.send(`wecome to the page of ${username}`);
//     console.log(req.params);
// })

// this is the code for rquest and respone int the local
// app.get("/apple",(req,res)=>{
//     res.send("you are in root path apple");
// })
// app.get("/mango",(req,res)=>{
//     res.send("you are in root path mango");
// })
// app.get("/banana",(req,res)=>{
//     res.send("you are in root path banana");
// })
// app.get("*",(req,res)=>{
//     res.send("this page does not exist");
// })
// app.post("/",(req,res)=>{
//     res.send("you are in post is there path");
// })
// app.use((req,res)=>{
//     console.log("reqest is recived");
//     let code="<h1>fruits</h1><ul><li>mangos</li><li>banana</li><li>apple</li></ul>"
//     res.send(code);
// })