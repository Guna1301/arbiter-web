import { prisma } from "../config/db.js";

export const authCallback = async (req: any, res: any, next: any) => {
  try {
    const { id, firstName, lastName, email } = req.body;

    await prisma.user.upsert({
      where: {
        clerkUserId: id,
      },
      update: {
        name: `${firstName || ""} ${lastName || ""}`.trim(),
        email,
      },
      create: {
        clerkUserId: id,
        name: `${firstName || ""} ${lastName || ""}`.trim(),
        email,
      },
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.log("Error in auth callback", error);
    next(error);
  }
};