import { Request, Response } from "express";
import * as eventService from "../services/event.service.js";

export const createEvent = async (req: any, res: Response) => {

  try {

    const projectId = req.project.id;
    const events = req.body.events;
    
    const event = await eventService.createEvents(
      projectId,
      events
    );

    res.json(event);

  } catch (err) {

    res.status(500).json({
      message: "Failed to record event"
    });

  }

};