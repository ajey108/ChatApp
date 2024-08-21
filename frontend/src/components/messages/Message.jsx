import React from 'react';

const Message = () => {
    return (
        <div className="chat chat-end">
            <div className="chat-image avatar">
                <div className="w-16 md:w-20 rounded-full">
                    <img src="https://img.freepik.com/premium-photo/avatar-resourcing-company_1254967-6653.jpg?w=740" alt="Avatar" />
                </div>
            </div>
            <div className="chat-bubble text-white bg-blue-500">
                Hi, what's up?
            </div>
            <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
                10:00 am
            </div>
        </div>
    );
}

export default Message;
