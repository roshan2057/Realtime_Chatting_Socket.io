import jwt from 'jsonwebtoken'

export const createToken = (data)=>{
    const token = jwt.sign(data,"key",{expiresIn: '1h'});
    return token;
}


export const verifyToken = (token)=>{
    try{

        const status = jwt.verify(token,"key")
        return status
    }catch(error){
        return false
    }
}