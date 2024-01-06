import express from 'express';

const router = express.Router()


router.get('/',(req,res)=>{
    res.send("working fine")
})


router.post('/login',(req,res)=>{
    
    res.send('ok')
})



export default router