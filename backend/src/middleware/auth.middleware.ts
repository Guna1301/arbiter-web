import { verifyToken } from "@clerk/backend";

export const requireAuth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader?.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const token = authHeader.split(" ")[1];

    const payload = await verifyToken(token, {
      secretKey: process.env.CLERK_SECRET_KEY,
      clockSkewInMs: 60000,
    });

    req.userId = payload.sub;

    next();
  } catch (err) {
    console.log("VERIFY ERROR:", err);
    return res.status(401).json({ message: "Unauthorized" });
  }
};