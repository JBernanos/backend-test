import { colorInputDto, colorOutputDto } from "../../dto/colors";
import connection from "../database/createConnection";

export default async function (color: colorInputDto): Promise<colorOutputDto> {
  try {
    await connection.query(`INSERT INTO "colors" ("name") VALUES ($1)`, [color]);
    return { status: 200, data: { message: "Color saved." } };
  } catch (error) {
    console.log(`(ERROR) - Error while saving color: ${error}`);
    return { status: 500, data: { message: "Error while saving color." } };
  }
}
