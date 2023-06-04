import { db } from "@vercel/postgres";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const client = await db.connect();

  try {
    await client.query("CREATE TABLE Pets (Name varchar(255), Owner varchar(255));");
    const names = ["Fiona", "Lucy"];
    await client.query("INSERT INTO Pets (Name, Owner) VALUES ($1, $2);", names);
  } catch (error) {
    return response.status(500).json({ error });
  }

  const result = await client.query("SELECT * FROM Pets;");
  const pets = result.rows;

  return response.status(200).json({ pets });
}
