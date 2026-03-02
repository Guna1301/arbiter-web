import { prisma } from "../config/db.js";

export const syncUser = async (req:any,res:any,next:any) => {

  const clerkId = req.auth.userId;

  let user = await prisma.user.findUnique({
    where:{ clerkUserId: clerkId }
  });

  if(!user){
    user = await prisma.user.create({
      data:{
        clerkUserId: clerkId,
        email:"temp@email.com"
      }
    });
  }

  req.dbUser = user;

  next();
};