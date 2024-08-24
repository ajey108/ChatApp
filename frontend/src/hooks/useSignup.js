import React, { useState } from 'react'
import toast from 'react-hot-toast';


const useSignup = () => {
 const [loading,setLoading] = useState(false);
 const signup = async({fullName,username,password,confirmPassword,gender})=>{
 const success =  handleInputErrors({fullName,username,password,confirmPassword,gender})
  if(!success) return;

  setLoading(true);
  try{
   const res = await fetch('http://localhost:5000/api/signup',)
  } 
  catch(error){
    toast.error(error.message)

  }finally{
    setLoading(false);
  }
 }
}

export default useSignup;



//handleInputErrors function

function handleInputErrors(){fullName,username,password,confirmPassword,gender}{
    if(!fullName || !username || !password || !confirmPassword || !gender){
       
        toast.error('Please fill all the fields')
        return false;
    }

    if(password !== confirmPassword){
        toast.error('Passwords do not match')
        return false;
    }

    if(password.length<6){
        toast.error('Password must be at least 6 characters')
        return false
    }

    return true

}