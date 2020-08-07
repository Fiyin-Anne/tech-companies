import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new pg.Pool(
    {connectionString: process.env.DB_URL || process.env.DATABASE_URL}
);

pool.connect();


export default pool;

