import Conversation from '../models/conversation.model.js'


export const sendMessage = async (req,res)=>{
try{
const {message} = req.body;
const {id:receiverId} = req.params;
const senderId = req.user._id

//to find the conversation between the users

let conversation = await Conversation.findOne({
    participants:{$all:[senderId,receiverId]},
})

//create the conversation
if(!conversation){
    conversation = await Conversation.create({
        participants:[senderId,receiverId],

    })
}

const newMessage = new MessageChannel({
    senderId,
    receiverId,
    message,
})


//if there is new message
if(newMessage){
    conversation.messages.push(newMessage._id);
}

res.status(201).json(newMessage);


} catch(error){
    console.log("Error in sendMessage controller:",error.message)
    res.status(500).json({error:"Internal server error"});
}
};