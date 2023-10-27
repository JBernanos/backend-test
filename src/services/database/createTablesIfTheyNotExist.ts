import client from "./createConnection";

export default async function createTablesIfTheyNotExist() {
  // form-users
  client.query(`CREATE TABLE IF NOT EXISTS "form-users" (
    "name" VARCHAR(100) NOT NULL,
    "document" VARCHAR(100) NOT NULL PRIMARY KEY,
    "email" VARCHAR(100) NOT NULL,
    "favorite_color" VARCHAR(20) NOT NULL,
    "comments" TEXT NOT NULL
  );`);

  // colors
  const { rows } = await client.query(`SELECT to_regclass('public.colors');`);
  if (!rows[0].to_regclass) {
    const colors = ["vermelho", "laranja", "amarelo", "verde", "azul", "anil", "violeta"];
    client.query(`CREATE TABLE "colors" ("name" VARCHAR(20) NOT NULL);`);
    colors.forEach((color) => {
      client.query(`INSERT INTO "colors" ("name") VALUES ($1)`, [color]);
    });
  }
}
