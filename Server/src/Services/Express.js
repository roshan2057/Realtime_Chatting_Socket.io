import express from "express"
import router from '../Route/Route.js'
import cors from 'cors';
import '../Model/Dbconnection.js'

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL || 'http://localhost:5173'
}))

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/',router)

const server = app.listen(PORT,()=>{
    console.log(`Server running in ${PORT}`)
})

export default server