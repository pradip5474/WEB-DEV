const mongoose= require("mongoose");

const userSchema = new mongoose.Schema({
    user:String,
    pass: String
});

const Model=mongoose.model("login",userSchema)

module.exports={Model}