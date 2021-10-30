import { pool } from "../utils/createPool";

const createTables = async () => {
  try {
    const connection = await pool.connect();
    await connection.query(
      "CREATE TABLE IF NOT EXISTS boards(id SERIAL, name VARCHAR NOT NULL);"
    );
    connection.release();
    pool.end();
    console.log(String.fromCodePoint(0x2705) + "Tables created successfully ");
  } catch (e) {
    console.log(e);
    console.error(String.fromCodePoint(0x274C) + "Error creating tables in the database");
  }
};

createTables();
