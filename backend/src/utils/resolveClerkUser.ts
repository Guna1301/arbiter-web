import { getAuth, clerkClient } from "@clerk/express";

export const resolveClerkUser = async (req: any) => {
  const { userId } = getAuth(req);

  if (!userId && process.env.NODE_ENV === "development") {
    return {
      clerkUserId: "dev_guna",
      email: "dev@example.com",
      name: "Dev Guna",
    };
  }

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