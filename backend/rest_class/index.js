const express=require("express");
const app=express();

const port=8080;
const path=require("path");//for set up the file of views and  public 
app.use(express.urlencoded({extended:true}));
app.set("view engine", "ejs");   
app.set("views",path.join(__dirname,"views"));
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.use(express.static(path.join(__dirname,"public")));

let posts=[
    {
        id: uuidv4(),
        username:"pradip",
        content:"this is content",
        Image:"https://www.otocapital.in/_next/image?url=https%3A%2F%2Fassets.otocapital.in%2Fprod%2Fauburn-black-bajaj-avenger-220-image.jpeg&w=1024&q=75",
    },
    {
        id:uuidv4(),
        username:"pradip",
        content:"this is content",
        Image:"https://upload.wikimedia.org/wikipedia/en/4/41/IMG_Worlds_of_Adventure.png",
    },
    {
        id:uuidv4(),
        username:"pradip",
        content:"this is content",
        Image:"https://qcin.org/wp-content/uploads/2024/07/Banner_Jul-09-2024.jpg",
    },
    {
        id:uuidv4(),
        username:"pradip",
        content:"this is content",
        Image:"https://scontent.fpnq2-2.fna.fbcdn.net/v/t39.30808-6/310753565_1449252252226384_6171915436478833632_n.png?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=BPV4q0IDI3MQ7kNvgH9sX-8&_nc_ht=scontent.fpnq2-2.fna&oh=00_AYB7Tk8vuR7RH92-KDsOdmt3pBfW7xupDcVxIdTrZRkc0A&oe=66BCE0D3"
    }
]

app.get("/post",(req,res)=>{
    res.render("index.ejs",{posts});
})

app.get("/post/new",(req,res)=>{
    res.render("new.ejs", {posts});
})

app.get("/post/:id/edit",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=>id===p.id);
    res.render("editpost.ejs",{post});
})

app.post("/post",(req,res)=>{
    let {username,content,Image}=req.body;
    console.log(req.body);
    let id=uuidv4();
    posts.push({id,username , content,Image});
    res.redirect("/post");
})


app.patch("/post/:id",(req,res)=>{
    let {id}=req.params;
    let newcontent=req.body.content;// this is the content which is comming from the req
    console.log(newcontent);
    let post=posts.find((p)=>id===p.id);
    post.content=newcontent;

    let {image}=req.params;
    console.log("this is image",image)
    let newimg=req.body.Image;
    let the=posts.find((p)=>image===p.image);
    the.image=newimg;
    // console.log(post);
    // posts.push({id,username , newcontent});
    res.redirect("/post");
})



app.get("/post/:id",(req,res)=>{
    let {id}=req.params;
    console.log(id);
    let post=posts.find((p)=>id===p.id);
    // console.log(post);
    res.render("show.ejs",{post});
})

app.delete("/post/:id",(req,res)=>{
    let {id}=req.params;
     posts=posts.filter((p)=>id!==p.id);
    res.render("index.ejs",{posts});
})
app.get("/newpost",(req,res)=>{
    res.send("this is the new respopse from the keyboard");
    console.log("this is the console print from the keyboard");
})

app.listen(port,()=>{
    console.log(`Listening ${port}`);
})


// (method) Array<{ id: string; username: string; content: string; Image: string; }>.find(predicate: (value: {
//     id: string;
//     username: string;
//     content: string;
//     Image: string;
// }, index: number, obj: {
//     id: string;
//     username: string;
//     content: string;
//     Image: string;
// }[]) => unknown, thisArg?: any): {
//     id: string;
//     username: string;
//     content: string;
//     Image: string;
// } | undefined (+1 overload)
// Returns the value of the first element in the array where predicate is true, and undefined otherwise.

// @param predicate
// find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, find immediately returns that element value. Otherwise, find returns undefined.

// @param thisArg
// If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead.

