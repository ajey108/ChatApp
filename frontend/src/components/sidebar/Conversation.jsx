import React from 'react'

const Conversation = () => {
  return (
   <>
   <div className="flex gap-2 items-center hover:bg-sky-500 rounded cursor-pointer">
    <div className='avatar online'>
        <div className="w-12 rounded-full">
            <img src="https://plus.unsplash.com/premium_vector-1714148691701-d23967ac7038?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="user avatar" />
        </div>

    </div>

    <div className='flex flex-col flex-1'>
        <div className='flex gap-3 justify-between' >
            <p className='font-bold text-gray-300'>John Snow</p>
            <span className='text-xl'>😃</span>
        </div>
    </div>
   </div>
   <div className="divider my-2 py-0 h-1"></div>
   
   </>
  )
}

export default Conversation