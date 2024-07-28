import jwt from 'jsonwebtoken';

const protectRoute = (req,res,next)=>{
    try{
        //get the token from the cookies
        const token = req.cookies.jwt;
        if(!token){
            return res.status(401).json({error:"Unauthorized - No token Provided"})
        }

        //if there is token
         const decoded = jwt.verify(token,process.env.JWT_SECRET);

         if(!decoded){
           return res.status(401).json({error:"Unauthorized - Invalid Token"}); 
         }
    }catch(error){
        console.log("Error in protectRoute middleware:",error.message)
        res.status(500).json({error:"Internal Server Error"});
    }};