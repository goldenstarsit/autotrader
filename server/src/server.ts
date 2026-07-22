import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { logger } from "./logger/logger.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const HOST = process.env.APP_HOST || "0.0.0.0";
const PORT = Number(process.env.APP_PORT || 3000);

app.get("/", (_req, res) => {
  res.json({
    success: true,
    application: process.env.APP_NAME || "AutoTrader",
    version: "1.0.0",
    status: "running",
    environment: process.env.NODE_ENV || "development",
    timestamp: new Date().toISOString()
  });
});

app.get("/health", (_req, res) => {
  res.json({
    success: true,
    status: "healthy"
  });
});

app.listen(PORT, HOST, () => {
  logger.info("=================================");
  logger.info(`${process.env.APP_NAME || "AutoTrader"} Started`);
  logger.info(`Listening on http://${HOST}:${PORT}`);
  logger.info(`Environment: ${process.env.NODE_ENV}`);
  logger.info("=================================");
});
