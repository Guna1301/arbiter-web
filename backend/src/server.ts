import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import { clerkMiddleware } from "@clerk/express";

import projectRoutes from "./routes/project.routes.js";
import apiKeyRoutes from "./routes/apikey.routes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());

app.get('/health',(req,res)=>{
    res.status(200).json({message:'Server is healthy'});
})

app.use("/api/projects",projectRoutes);
app.use("/api/apikeys",apiKeyRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});