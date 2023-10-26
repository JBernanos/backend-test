import express from "express";

import { port, version } from "./config/api.json";

const app = express();

app.listen(port, () => {
  console.log(`(DEBUG) - API Listening on port: ${port}.`);
  app.use(express.json());
});
