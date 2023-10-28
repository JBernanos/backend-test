import { Client } from "pg";

const client = new Client({
  host: "db",
  port: 5432,
  database: "backend-test",
  user: "postgres",
  password: "postgres",
});

client.connect();

export default client;
