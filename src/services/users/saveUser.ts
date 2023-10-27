import { userInputDto, userOutputDto } from "../../dto/users";
import connection from "../database/createConnection";

export default async function (payload: userInputDto): Promise<userOutputDto> {
  try {
    await connection.query(`INSERT INTO "form-users" ("name", "document", "email", "favorite_color", "comments") VALUES ($1, $2, $3, $4, $5)`, [
      payload.name,
      payload.document,
      payload.email,
      payload.favorite_color,
      payload.comments,
    ]);
    return { status: 200, data: { message: "User created." } };
  } catch (error: any) {
    if (error.code == 23505) return { status: 409, data: { message: "User already exist." } };
    else return { status: 500, data: { message: "Error while saving user." } };
  }
}
