import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
import cookieParser from 'cookie-parser'
import authRoutes from './routes/auth.js'



const app = express();
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true  
}))
app.use(express.json())
app.use(cookieParser());
app.use('/api/user', authRoutes);



app.listen(9294, ()=>{
    console.log("Server Started")
})