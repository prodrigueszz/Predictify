import { Pool } from 'pg';

const portEnv = process.env.DB_PORT ? parseInt(process.env.DB_PORT) : undefined;

const pgPool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: portEnv,
  database: process.env.DB_NAME,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000
});

export default pgPool;