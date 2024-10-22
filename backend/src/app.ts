import { config } from 'dotenv';
import express from "express";
import morgan from "morgan";
import connectDB from './db.js';
import route from './routers/index.js';

config()
connectDB()

const app=express();


//middlewares
app.use(express.json())
app.use(morgan('dev'))//remove in production

app.use("api/v1/", route)

app.all("*",(req,res)=>{
    console.log("page not found")
    res.status(404).json({
        message: "Page not found"
    })
    
})



export default app