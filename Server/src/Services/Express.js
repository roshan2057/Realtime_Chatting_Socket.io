import express from "express"
import router from '../Route/Route.js'
import cors from 'cors';
import '../Model/Dbconnection.js'

const app = express();
const PORT = process.env.EXPRESS_PORT || 4000;

app.use(cors({
    credentials: true,
    origin:'http://localhost:5173'
}))

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/',router)

app.listen(PORT,()=>{
    console.log(`Express server running in ${PORT}`)
})

