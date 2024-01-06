import mongoose from "mongoose";

mongoose
.connect("mongodb://127.0.0.1:27017/chatting")
.then(()=>{

    console.log('Mongodb Connected')
}).catch(()=>{
    
    console.log('Error in DB Connection')
})