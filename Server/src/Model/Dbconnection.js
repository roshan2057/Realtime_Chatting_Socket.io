import mongoose from "mongoose";

mongoose
.connect(process.env.MONGODB)
.then(()=>{

    console.log('Mongodb Connected')
}).catch(()=>{
    
    console.log('Error in DB Connection')
})