// app/api/route.ts
import { db } from "@vercel/postgres";
import { NextRequest } from "next/server";

export const POST = async (request: NextRequest) => {
  const { title, description, image } = await request.json();

  try {
    const client = await db.connect();
    const result = await client.query(
      `INSERT INTO Projects (title, description, image) VALUES ($1, $2, $3) RETURNING *`,
      [title, description, image]
    );
    const project = result.rows[0];
    client.release();

    return new Response(JSON.stringify(project), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new project", { status: 500 });
  }
};

export const GET = async (request: NextRequest) => {
  try {
    const client = await db.connect();
    const result = await client.query('SELECT * FROM Projects');
    const projects = result.rows;
    client.release();

    return new Response(JSON.stringify(projects), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all projects", { status: 500 });
  }
};
