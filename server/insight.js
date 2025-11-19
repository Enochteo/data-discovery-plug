import "dotenv/config";
import express from "express";
import cors from "cors";
import path from "path";
import { generateObject } from "ai";
import { z } from "zod";
import { openai } from "@ai-sdk/openai";

const app = express();
app.use(cors());
app.use(express.json());

const schema = z.object({
  summary: z.string(),
  anomalies: z.array(z.string()),
});

app.post("/insight", async (req, res) => {
  try {
    const { prompt } = req.body;
    const { object } = await generateObject({
      model: openai("gpt-4o-mini"),
      schema,
      prompt,
    });
    res.json({ summary: object.summary, anomalies: object.anomalies });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "AI call failed" });
  }
});

const PORT = process.env.PORT || 4000;
// Serve static frontend in production (single-process deployment)
if (
  process.env.NODE_ENV === "production" ||
  process.env.SERVE_STATIC === "true"
) {
  const distPath = path.join(process.cwd(), "dist");

  app.use(express.static(distPath));

  // SPA fallback — avoid path-to-regexp route parsing by using a middleware
  app.use((req, res, next) => {
    if (req.method !== "GET") return next();
    // Don't intercept API routes
    if (req.path && req.path.startsWith("/insight")) return next();
    res.sendFile(path.join(distPath, "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`AI insight server listening on port ${PORT}`);
});
