const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/test');

main().then(()=>{
    console.log("connection is ready");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}


const userSchema = new mongoose.Schema({
    name:String,
    email: String
});

const User= mongoose.model("User",userSchema);

User.findOneAndDelete({name:"nisha"}).then((res)=>{//there is a find one also which return a only one model
    console.log(res);//here we can send the arr index of res[0].name   
}).catch((err)=>{
    console.log(err);
});


// User.updateOne({name:"pradip"},{name:"pradip mali"}).then((res)=>{//there is a find one also which return a only one model
//     console.log(res);//here we can send the arr index of res[0].name   
// }).catch((err)=>{
//     console.log(err); 
// });


// User.findById("66cdd14949a77e4b37091031").then((res)=>{//there is a find one also which return a only one model
//     console.log(res);//here we can send the arr index of res[0].name   
// }).catch((err)=>{
//     console.log(err);
// });

// const user1= new User({
//     name:"pradip",
//     email: "pradipmali@gmail.com"
// })
// user1.save(); // to save in databse


// const user2= new User({
//     name:"sanket",
//     email: "sanket@gmail.com"    
// })

// user2.save().then((res)=>{
//     console.log(res);
// }).catch(err=>{
//     console.log(err);
// });
// User.insertMany([
//     {name: "gaurav",email:"gauravmane@gmail.com"},
//     {name: "hritik",email:"hritik@gmail.com"},
//     {name: "nisha",email:"nisha@gmail.com"},
//     {name: "pradnya",email:"pradnya@gmail.com"}
// ]).then((res)=>{
//     console.log(res); 
// })