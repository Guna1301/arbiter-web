import crypto from "crypto";
import { prisma } from "../config/db.js";

export const validateApiKey = async (req: any, res: any, next: any) => {
  try {
    const apiKey = req.headers["x-api-key"];

    if (!apiKey || typeof apiKey !== "string") {
      return res.status(401).json({
        message: "API key missing"
      });
    }

    const parts = apiKey.split("_");
    if (parts.length < 3) {
      return res.status(400).json({ message: "Malformed API key" });
    }

    const prefix = parts.slice(0, 2).join("_");

    const hash = crypto
      .createHash("sha256")
      .update(apiKey)
      .digest("hex");

    const keyRecord = await prisma.apiKey.findFirst({
      where: {
        prefix,
        keyHash: hash
      },
      include: {
        project: true
      }
    });

    if (!keyRecord) {
      return res.status(403).json({
        message: "Invalid API key"
      });
    }

    if (keyRecord.status !== "active") {
      return res.status(403).json({
        message: "API key revoked"
      });
    }

    if (keyRecord.expiresAt && keyRecord.expiresAt < new Date()) {
      return res.status(403).json({
        message: "API key expired"
      });
    }

    prisma.apiKey.update({
      where: { id: keyRecord.id },
      data: { lastUsedAt: new Date() }
    }).catch(() => {});

    req.project = keyRecord.project;

    next();

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Auth failed" });
  }
};