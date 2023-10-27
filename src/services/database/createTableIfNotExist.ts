import client from "./createConnection";

export default function createTableIfNotExist() {
  client.query(`CREATE TABLE IF NOT EXISTS "form-users" (
    "name" VARCHAR(100) NOT NULL,
    "document" VARCHAR(100) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "favorite_color" VARCHAR(20) NOT NULL,
    "comments" TEXT NOT NULL
  );`);
}
