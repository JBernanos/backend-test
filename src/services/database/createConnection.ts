import { Client } from "pg";

const client = new Client({
  host: "127.0.0.1",
  port: 5432,
  database: "backend-test",
  user: "postgres",
  password: "postgres",
});

client.connect();

export default client;
