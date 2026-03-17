import { prisma } from "../config/db.js";
import { resolveClerkUser } from "../utils/resolveClerkUser.js";

export const syncUser = async (req: any, res: any, next: any) => {
  try {
    const identity = await resolveClerkUser(req);

    if (!identity) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    const user = await prisma.user.upsert({
      where: {
        clerkUserId: identity.clerkUserId,
      },
      update: {
        email: identity.email,
        name: identity.name,
      },
      create: {
        clerkUserId: identity.clerkUserId,
        email: identity.email,
        name: identity.name,
      },
    });

    req.dbUser = user;

    next();
  } catch (err) {
    next(err);
  }
};