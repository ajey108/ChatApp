import React from 'react'
import { BiLogOutCircle } from "react-icons/bi";
import useLogout from '../hooks/useLogout';

const LogoutButton = () => {
  const {loading,logout} = useLogout();
  return (
    <div className='mt-auto '>
        {!loading ? (
          <BiLogOutCircle onClick={logout}/>
        ): (<span className='loading  loading-spinner'></span>)}
    </div>
  )
}

export default LogoutButton