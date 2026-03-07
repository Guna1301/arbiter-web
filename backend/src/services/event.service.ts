import { prisma } from "../config/db.js";

export interface EventPayload {
  rule: string;
  key: string;
  allowed: boolean;
}

export const createEvent = async (
  projectId: string,
  data: EventPayload
) => {

  return prisma.event.create({
    data: {
      projectId,
      rule: data.rule,
      key: data.key,
      allowed: data.allowed
    }
  });

};