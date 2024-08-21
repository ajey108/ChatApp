import React from 'react'
import Conversation from './Conversation'

const Conversations = () => {
  return (
    <div className='py-2 flex flex-col mb-2 overflow-auto'>
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
    </div>
  )
}

export default Conversations