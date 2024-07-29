import jwt from 'jsonwebtoken';
import User from '../models/usermodel.js';

const protectRoute = async (req,res,next)=>{
    try{
        //get the token from the cookies
        const token = req.cookies.jwt;
        if(!token){
            return res.status(401).json({error:"Unauthorized - No token Provided"})
        }

        //if there is token
         const decoded = jwt.verify(token,process.env.JWT_SECRET);

        // there is token but invalid
         if(!decoded){
           return res.status(401).json({error:"Unauthorized - Invalid Token"}); 
         }

         const user = await User.findById(decoded.userId).select("-password");
         if(!user){
            return res.status(404).json({error:"User not found"});
         }

         req.user = user

         next(); // to run sendMessage function after checks
    }catch(error){
        console.log("Error in protectRoute middleware:",error.message)
        res.status(500).json({error:"Internal Server Error"});
    }};

    export default protectRoute;