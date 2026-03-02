import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import { clerkMiddleware } from "@clerk/express";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());

app.get('/health',(req,res)=>{
    res.status(200).json({message:'Server is healthy'});
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});