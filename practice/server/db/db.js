const mongoose= require("mongoose");

main().then(()=>{
    console.log("connection is ready");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://pradipmali5474:root@cluster0.nt0yn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
}

module.exports=main;