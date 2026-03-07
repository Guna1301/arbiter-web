import { Request, Response } from "express";
import * as eventService from "../services/event.service.js";

export const createEvent = async (req: any, res: Response) => {

  try {

    const projectId = req.project.id;

    const event = await eventService.createEvent(
      projectId,
      req.body
    );

    res.json(event);

  } catch (err) {

    res.status(500).json({
      message: "Failed to record event"
    });

  }

};