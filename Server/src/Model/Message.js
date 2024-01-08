import mongoose from 'mongoose';


const messageSchema = new mongoose.Schema({
sender: {type: mongoose.Schema.Types.ObjectId,
rel : "User"
},
receiver:{
    type: mongoose.Schema.Types.ObjectId,
    rel : "User"
},
text:{
    type: String,
}


},{timestamps: true})

export default mongoose.model("Message",messageSchema);