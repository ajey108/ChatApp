import express from 'express';
import dotenv from "dotenv";
import authRoutes from './routes/authroute.js'
import connectToMongoDb from './db/connectMongoDb.js';

const app = express();

dotenv.config();
const PORT = process.env.PORT|| 5000;

app.get('/',(req,res)=>{
    res.send("app is working");
})

app.use('/api/auth',authRoutes)

app.listen(PORT,()=>
    {
        connectToMongoDb()
     console.log(`sever running at port${PORT}`)
    });