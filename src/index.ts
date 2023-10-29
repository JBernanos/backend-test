import express from "express";
import dotenv from "dotenv";

import createTablesIfTheyNotExist from "./services/database/createTablesIfTheyNotExist";
import usersRoute from "./routes/users";
import colorsRoute from "./routes/colors";

const app = express();
dotenv.config();

app.listen(process.env.API_PORT, async () => {
  console.log(`(DEBUG) - API Listening on port: ${process.env.API_PORT}.`);

  createTablesIfTheyNotExist();

  app.use(express.json());
  app.use(`${process.env.API_VERSION}/users`, usersRoute);
  app.use(`${process.env.API_VERSION}/colors`, colorsRoute);
});
