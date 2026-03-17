import { prisma } from "../config/db.js";

export const authCallback = async (req: any, res: any, next: any) => {
  try {
    const { id, firstName, lastName, email } = req.body;

    if (!id || !email) {
      return res.status(400).json({ message: "Missing required fields: id and email" });
    }

    await prisma.user.upsert({
      where: {
        clerkUserId: id,
      },
      update: {
        name: `${firstName || ""} ${lastName || ""}`.trim() || null,
        email,
      },
      create: {
        clerkUserId: id,
        name: `${firstName || ""} ${lastName || ""}`.trim() || null,
        email,
      },
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.log("Error in auth callback", error);
    next(error);
  }
};