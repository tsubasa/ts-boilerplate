import sqlite3 from 'sqlite3';
import { Connection, ConnectionOptions, createConnection } from 'typeorm';
import 'dotenv/config';
import Sample from './entities/Sample';

if (!process.env.SQLITE_PATH) {
  throw new Error('SQLITE_PATH environment variable is not set.');
}

const options: ConnectionOptions = {
  type: 'sqlite',
  database: process.env.SQLITE_PATH,
  entities: [Sample],
  logging: true,
};

// eslint-disable-next-line import/no-mutable-exports
export let connection: Connection | undefined;

export const connect = async (): Promise<Connection | undefined> => {
  try {
    const conn = await createConnection(options);
    connection = conn;
    console.log(`Database connection success. Connection name: '${conn.name}' Database: '${conn.options.database}'`);
  } catch (err) {
    console.error(err);
  }
  return undefined;
};

export const PrepareDB = () => new sqlite3.Database(':memory:');
