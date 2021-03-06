import * as dotenv from "dotenv";
import { Pool } from "pg";

dotenv.config();

export const pool = new Pool({
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    port: 5432
})