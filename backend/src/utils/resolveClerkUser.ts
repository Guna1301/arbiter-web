import { getAuth, clerkClient } from "@clerk/express";

export const resolveClerkUser = async (req: any) => {
  const userId = req.userId;

  if (!userId) {
    return null;
  }

  const clerkUser = await clerkClient.users.getUser(userId);

  const email =
    clerkUser.emailAddresses[0]?.emailAddress;

  const name =
    `${clerkUser.firstName ?? ""} ${clerkUser.lastName ?? ""}`.trim()
    || email.split("@")[0];

  return {
    clerkUserId: userId,
    email,
    name,
  };
};