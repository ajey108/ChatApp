export const SignUp = async (req,res)=>{
   try{
    const {
        fullName, username,password,confirmPassword,gender } = req.body;

        if(password !== confirmPassword){
            return res.status(400).json({error:"Passwords dont match"})
        }
        
        const user = await User.findOne({username});


        if(user){
            return res.status(400).json({error:"Username already exists"})
        }

        //Hash password

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

        const newUser = new User({
            
        })

   } catch(error){}
};