import { request } from "express";
import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    senderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        require:true
    },
    receiverId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        request:true
    }
},{timeseries:true});


const Message = mongoose.model("Message",messageSchema);

export default Message;