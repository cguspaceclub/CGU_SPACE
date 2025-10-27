import { RequestHandler } from "express";
import { DemoResponse } from "@shared/api";

export const handleDemo: RequestHandler = (req, res) => {
  const response: DemoResponse = {
    message: "Hello from CGU Space Club Express server",
    timestamp: new Date().toISOString(),
    version: "1.0.0",
    status: "Operational",
  };
  res.status(200).json(response);
};
