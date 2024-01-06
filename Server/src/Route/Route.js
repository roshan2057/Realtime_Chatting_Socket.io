import express from 'express';

const router = express.Router()


router.get('/',(req,res)=>{
    res.send("working fine")
})


router.post('/login',(req,res)=>{
    try{

        console.log(req.body);
        
        res.cookie("cookie","this id token valkue",{maxAge:9000000,httpOnly:true,secure:false})
        res.status(200).json({token:"this is token"})
        // res.status(401).json({message:"Username and Password Error"})
    }catch(error){
        throw error
    }
})


router.post('/register',(req,res)=>{
    const  token = req.headers.cookie.split('=')[1]
   console.log(token)
    const {username, phone , password}= req.body;

    res.status(201).json({token:"token"})
})



export default router