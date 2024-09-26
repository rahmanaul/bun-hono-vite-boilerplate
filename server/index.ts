import app from "./app";

Bun.serve({
  port: 3000, // defaults to 3000
  hostname: "0.0.0.0", // defaults to "0.0.0.0"
  fetch: app.fetch
});

console.log("Server started at http://mydomain.com");