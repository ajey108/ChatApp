import React from 'react'
import SearchInput from '../SearchInput'
import Conversations from './Conversations'
import LogoutButton from '../LogoutButton'

const Sidebar = () => {
  return (
    <div className='border-r border-slate-500 p-4 felx flex-col'>
        <SearchInput/>
      <div className="divider px-3"></div>  
      <Conversations/>

      <LogoutButton className='w-6 text-white cursor-pointer'/>
    </div>
  )
}

export default Sidebar