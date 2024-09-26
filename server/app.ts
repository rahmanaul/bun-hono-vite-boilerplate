import { Hono } from "hono";
import { logger } from "hono/logger";
import { validator } from 'hono/validator'
import { serveStatic } from 'hono/bun'
import { helloRoute } from "./routes/hello";


const app = new Hono();

app.use("*", logger());

// app.get("/", c => {
//     return c.json({ message: "Hello, World!" });
// })
const apiRoutes = app.basePath('/api')
  .route("/hello", helloRoute)

app.get('*', serveStatic({ root: './frontend/dist' }))
app.get('*', serveStatic({ root: './frontend/dist/index.html' }))

export default app;
export type ApiRoutes = typeof apiRoutes