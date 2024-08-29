import express from 'express';
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';

import authRoutes from './routes/authroute.js'
import messageRoutes from './routes/message.route.js'
import userRoutes from './routes/user.route.js';


import connectToMongoDb from './db/connectMongoDb.js';
import { app,server } from './socket/socket.js';

const PORT = process.env.PORT|| 5000;
dotenv.config();

//middleware
app.use(express.json());// parse incoming req with JSON payloads(req.body)
app.use(cookieParser());// parese incoming cookies from req.cookies


app.use('/api/auth',authRoutes);
app.use('/api/messages',messageRoutes);
app.use('/api/users',userRoutes);


// app.get('/',(req,res)=>{
//     res.send("app is working");
// })



server.listen(PORT,()=>
    {
        connectToMongoDb()
     console.log(`sever running at port${PORT}`)
    });