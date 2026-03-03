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

    let user = await prisma.user.findUnique({
      where: {
        clerkUserId: identity.clerkUserId,
      },
    });

    if (!user) {
      user = await prisma.user.create({
        data: identity,
      });
    }

    req.dbUser = user;

    next();
  } catch (err) {
    next(err);
  }
};