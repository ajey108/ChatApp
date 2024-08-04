import Conversation from '../models/conversation.model.js';
import Message from '../models/message.model.js';

export const sendMessage = async (req, res) => {
  try {
    // message as input from the user
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    // find the conversation between the users
    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    // create the conversation if it doesn't exist
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    // create the new message
    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    // add the message to the conversation and save it
    if(newMessage){
      conversation.messages.push(newMessage._id);
    }

  // save the new message to the database
    await conversation.save();
    await newMessage.save();

    res.status(201).json(newMessage);
  } catch (error) {
    console.error('Error in sendMessage controller:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};
