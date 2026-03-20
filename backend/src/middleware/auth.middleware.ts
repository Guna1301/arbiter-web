import { getAuth } from "@clerk/express";

export const requireAuth = (req: any, res: any, next: any) => {
  const { userId } = getAuth(req);

  if (!userId) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  next();
};