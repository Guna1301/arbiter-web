import { prisma } from "../config/db.js";

export interface EventPayload {
  rule: string;
  key: string;
  allowed: boolean;
}

export const createEvents = async (
  projectId: string,
  events: EventPayload[]
) => {

  await prisma.event.createMany({
    data: events.map((e:any) => ({
      projectId,
      rule: e.rule,
      key: e.key,
      allowed: e.allowed
    }))
  });

};