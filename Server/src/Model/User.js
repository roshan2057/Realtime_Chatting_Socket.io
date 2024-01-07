import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username:{type:String, unique:true},
    phone:{type:Number},
    password:String,
    gender:String
},{timestamps: true});

export default mongoose.model("User",UserSchema);