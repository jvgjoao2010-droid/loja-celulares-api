
import pg from "pg";
import "dotenv/config";

const { Pool } = pg;

const pool = new Pool({
    host: process.env.PGHOST || process.env.pghost,
    user: process.env.PGUSER || process.env.pguser,
    password: process.env.PGPASSWORD || process.env.pgpassaword,
    port: process.env.PGPORT || process.env.pgport,
    database: process.env.PGDATABASE || 'postgres',
});

export default pool;
