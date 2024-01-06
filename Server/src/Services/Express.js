import express from "express"
import router from '../Route/Route.js'



const app = express();
const PORT = process.env.EXPRESS_PORT || 4000;

app.use('/',router)

app.listen(PORT,()=>{
    console.log(`Express server running in ${PORT}`)
})

