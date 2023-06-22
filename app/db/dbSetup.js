const { db } = require("@vercel/postgres");


async function setupDatabase() {
  try {
    const client = await db.connect();
    await client.query(`
      DROP TABLE IF EXISTS Projects;
    `);

    await client.query(`
      CREATE TABLE IF NOT EXISTS Projects (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        image VARCHAR(255)
      );
    `);


    const initialProjects = [
      {
        title: "Cross",
        description: "Cross is a decentralized application (dapp) that enables users to bridge their assets between Ethereum and Optimism and collect rare Cross NFTs(Non-Fungible Tokens) on the Ethereum blockchain. The app is built with Next.js and typescript on the frontend, and Solidity smart contracts on the backend.",
        image: "https://res.cloudinary.com/dk3o1hrxt/image/upload/v1683378215/cross_qjs0tw.png"
      },
      {
        title: "Passport",
        description: "Passport is a demo build that uses Gitcoin passport and the scorer API to demostrate a solution for sybil resistance for Dapps. Passport gating Dapps will fiter out real users for applications that require real unique users.",
        image: "https://res.cloudinary.com/dk3o1hrxt/image/upload/v1687438289/passportLogo_dkbqty.png"
      },
      // Add more placeholder projects as needed
    ];

    for (const project of initialProjects) {
      await client.query(`
        INSERT INTO Projects (title, description, image)
        VALUES ('${project.title}', '${project.description}', '${project.image}');
      `);
    }

    client.release();
    console.log("Database setup completed successfully!");
  } catch (error) {
    console.error("Error setting up the database:", error);
  }
}

setupDatabase();
