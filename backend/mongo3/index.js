const mongoose=require("mongoose");
const express=require("express");
const methodOverride=require("method-override");
const Chat=require("./models/chat");//this is imp 
const path=require("path");
const app=express();
const  port=8080;
app.use(methodOverride("_method"));
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"./public")));
app.use(express.urlencoded({extended:true}));
main().then(()=>{
    console.log("connection is done");
}).catch(err=>{
    console.log(err);
})
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
  }

// let chat1=new Chat({
//      from:"pradip",
//      to:"manisha",
//      msg:"hye how are you ?",
//      created_at: new Date()
// });

// chat1.save().then(res=>{
//     console.log(res);
// }).catch(err=>{
//     console.log(err);
// })

//Index rout or chats
app.get("/chats",async(req,res)=>{
    let chats=await Chat.find();
    res.render("index.ejs",{chats})
    // console.log(chats);
})

//new rout for get and post
app.get("/chats/new",(req,res)=>{
    res.render("new.ejs");
})
app.post("/chats",(req,res)=>{
     let {from,to,msg}=req.body;
     let chat1=new Chat({
        from:from,
        to:to,
        msg:msg,
        created_at: new Date()
   });
   chat1.save();
//    console.log(chat1);
   res.redirect("/chats");
})

//for updating db
app.get("/chat/:id/edit",async(req,res)=>{
    let {id}= req.params;
    let chat=await Chat.findById(id);
    // console.log(chat);
    res.render("edit.ejs",{chat});
})
app.put("/chat/:id",async(req,res)=>{
    let {id}= req.params;
    let {from, to,msg}=req.body;
    let updatedchat=await Chat.findByIdAndUpdate(id,{from:from,to:to,msg:msg});
    console.log(updatedchat);
    res.redirect("/chats");
})


// for deleting the chat 
app.delete("/chat/:id",async(req,res)=>{
    let {id}= req.params;
    let deletchat= await Chat.findByIdAndDelete(id);
    console.log(deletchat);
    res.redirect("/chats");
})

app.get("/",(req,res)=>{
    res.send("working");
})

app.listen(port,()=>{
    console.log(`listeing on ${port}`);
})