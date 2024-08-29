const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/test');

main().then(()=>{
    console.log("connection is ready");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const userSchema=mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    author:{
        type:String,
    },
    price:{
        type:Number,
    },
    place:{
        type:String,
        default: "islampur"
    }
})


const Book=mongoose.model("Book",userSchema);

let book1= new Book ({
    title:"english",
    author:"kaki",
    price:900  
})

book1.save().then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
});