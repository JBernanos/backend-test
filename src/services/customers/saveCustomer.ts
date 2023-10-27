import { userDto } from "../../dto/users";
import connection from "../database/createConnection";

export default async function (payload: userDto) {
  await connection.query(`INSERT INTO "form-users" ("name", "document", "email", "favorite_color", "comments") VALUES ($1, $2, $3, $4, $5)`, [
    payload.name,
    payload.document,
    payload.email,
    payload.favorite_color,
    payload.comments,
  ]);
}
