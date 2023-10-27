import { colorInputDto } from "../../dto/colors";
import connection from "../database/createConnection";

export default async function (): Promise<string[] | undefined> {
  try {
    const { rows } = await connection.query(`SELECT * from colors`);
    return formatPayloadToReturn(rows);
  } catch (error) {
    console.log(`(ERROR) - Error while retrieving colors from database: ${error}`);
    return undefined;
  }
}

const formatPayloadToReturn = (colors: colorInputDto[]): string[] => {
  const payload: string[] = [];
  colors.forEach((color) => {
    payload.push(color.name);
  });
  return payload;
};
