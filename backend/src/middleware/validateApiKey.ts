import crypto from "crypto";
import { prisma } from "../config/db.js";

export const validateApiKey = async (req:any,res:any,next:any)=>{

  try{

    const apiKey = req.headers["x-api-key"];

    if(!apiKey){
      return res.status(401).json({
        message:"API key missing"
      });
    }

    const hash = crypto
      .createHash("sha256")
      .update(apiKey)
      .digest("hex");

    const keyRecord = await prisma.apiKey.findFirst({
      where:{
        keyHash:hash,
        status:"active"
      },
      include:{
        project:true
      }
    });

    if(!keyRecord){
      return res.status(403).json({
        message:"Invalid API key"
      });
    }

    req.project = keyRecord.project;

    next();

  }catch(err){
    console.error(err);
    res.status(500).json({message:"Auth failed"});
  }

};