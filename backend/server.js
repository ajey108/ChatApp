import express from 'express';
import dotenv from "dotenv";
import authRoutes from './routes/authroute.js'
import connectToMongoDb from './db/connectMongoDb.js';

const app = express();
const PORT = process.env.PORT|| 5000;
dotenv.config();

app.use(express.json());
app.use('/api/auth',authRoutes)


// app.get('/',(req,res)=>{
//     res.send("app is working");
// })



app.listen(PORT,()=>
    {
        connectToMongoDb()
     console.log(`sever running at port${PORT}`)
    });