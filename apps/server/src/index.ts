import { serve } from "@hono/node-server";
import { Hono } from "hono";
import type { Song } from "@royalty/types";
import { cors } from "hono/cors";

const app = new Hono();

const songs: Song[] = [
  { id: 1, name: "Flowers", author: "Miley Cyrus", progress: 0.15 },
  { id: 2, name: "Anti-Hero", author: "Taylor Swift", progress: 0.27 },
  { id: 3, name: "As It Was", author: "Harry Styles", progress: 0.12 },
  { id: 4, name: "Heat Waves", author: "Glass Animals", progress: 0.38 },
  { id: 5, name: "Unholy", author: "Sam Smith ft. Kim Petras", progress: 0.03 },
  { id: 6, name: "Calm Down", author: "Rema & Selena Gomez", progress: 0.1 },
  { id: 7, name: "Bad Habit", author: "Steve Lacy", progress: 0.35 },
  {
    id: 8,
    name: "I'm Good (Blue)",
    author: "David Guetta & Bebe Rexha",
    progress: 0.58,
  },
  { id: 9, name: "Lavender Haze", author: "Taylor Swift", progress: 0.41 },
  {
    id: 10,
    name: "Creepin'",
    author: "Metro Boomin, The Weeknd, 21 Savage",
    progress: 0.32,
  },
];

app.use(
  "/api/*",
  cors({
    origin: "http://localhost:3001",
  }),
);

app.get("/api/v1/songs", (c) => {
  return c.json(songs);
});

serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  },
);
