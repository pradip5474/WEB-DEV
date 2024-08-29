const mongoose=require("mongoose");
const Chat=require("./models/chat");//this is imp 

main().then(()=>{
    console.log("connection is done");
}).catch(err=>{
    console.log(err);
})
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
  }

let allchat=([
    {
    from:"pradip",
    to:"manisha",
    msg:"hye how are you ?",
    created_at: new Date()
    },
    {
        from:"neha",
        to:"nisha",
        msg:"send me a notes",
        created_at: new Date()
    },
    {
        from:"priti",
        to:"pradnya",
        msg:"i have a crush on you",
        created_at: new Date()
    },
    {
        from:"vivek",
        to:"mrunali",
        msg:"would you go on date with me ",
        created_at: new Date()
    },
    {
        from:"sanket",
        to:"asmita",
        msg:"let's do it",
        created_at: new Date()
    },
    {
        from:"nisha",
        to:"pradip",
        msg:"i love you",
        created_at: new Date()
    }
]);

Chat.insertMany(allchat);


