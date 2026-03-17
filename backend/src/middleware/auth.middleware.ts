import { getAuth } from "@clerk/express";

export const requireAuth = (req: any, res: any, next: any) => {
  const { userId } = getAuth(req);

  // TODO: Remove this in production. This is just to allow us to bypass auth in development for easier testing.
  // if (!userId && process.env.NODE_ENV === "development") {
  //   console.log("development");
  //   return next();
  // }

  if (!userId) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  next();
};