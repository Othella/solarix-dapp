import { Database } from 'sqlite3';
import { open } from 'sqlite';

const dbFile = process.env.DB_FILE || './solarix.sqlite';

export async function openDb() {
  return open({
    filename: dbFile,
    driver: Database
  });
}