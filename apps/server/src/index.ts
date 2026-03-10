import { serve } from "@hono/node-server";
import { Hono } from "hono";

const app = new Hono();

const songs = [
  { id: 1, name: "Flowers", author: "Miley Cyrus", progress: 0.15 },
  { id: 2, name: "Anti-Hero", author: "Taylor Swift", progress: 0.27 },
  { id: 3, name: "As It Was", author: "Harry Styles", progress: 0.12 },
  { id: 4, name: "Heat Waves", author: "Glass Animals", progress: 0.38 },
  { id: 5, name: "Unholy", author: "Sam Smith ft. Kim Petras", progress: 0.03 },
];

app.get("/songs", (c) => {
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
