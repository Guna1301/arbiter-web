import crypto from "crypto";
import { prisma } from "../config/db.js";

export const validateApiKey = async (req:any,res:any,next:any)=>{

  const key = req.headers["x-api-key"];

  if(!key){
    return res.status(401).json({
      message:"API key missing"
    });
  }

  const hash = crypto
    .createHash("sha256")
    .update(key)
    .digest("hex");

  const apiKey = await prisma.apiKey.findFirst({
      where:{ keyHash:hash },
      include:{ project:true }
    });

  if(!apiKey){
    return res.status(403).json({
      message:"Invalid key"
    });
  }

  req.project = apiKey.project;

  next();
};