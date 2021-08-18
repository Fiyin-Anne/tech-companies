import mysql from 'mysql';
import dotenv from 'dotenv';
import util from 'util';

dotenv.config()

const dbconfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionLimit : 100,
};

const pool = mysql.createPool(dbconfig || process.env.CLEARDB_DATABASE_URL); //using pool to avoid restarting the server every time, amongst other things. Mention them in the blog post

pool.query = util.promisify(pool.query)

export default pool;