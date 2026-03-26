import { Request, Response } from "express";
import * as eventService from "../services/event.service.js";
export const createEvent = async (req: any, res: Response) => {

  try {

    const projectId = req.project.id;

    const events = req.body.events || [req.body];

    await eventService.createEvents(projectId, events);

    res.json({ success: true });

  } catch (err) {

    res.status(500).json({
      message: "Failed to record event"
    });

  }

};
