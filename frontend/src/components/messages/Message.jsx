import React from 'react'

const Message = () => {
    return (
        <div className='chat chat-end'>
            <div className='chat-image avatar'>
                <div className="w-10 rounded-full">
                    <img src={"https://img.freepik.com/premium-photo/avatar-resourcing-company_1254967-6653.jpg?w=740"} />
                </div>
                <div className={"chat-bubble text-white bg-blue-500"}></div>
            </div>
        </div>
    )
}

export default Message