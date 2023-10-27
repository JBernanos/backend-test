import express from "express";

import { port, version } from "./config/api.json";
import usersRoute from "./routes/users";
import createTableIfNotExist from "./services/database/createTableIfNotExist";

const app = express();

app.listen(port, async () => {
  console.log(`(DEBUG) - API Listening on port: ${port}.`);

  createTableIfNotExist();

  app.use(express.json());
  app.use(`${version}/users`, usersRoute);
});
