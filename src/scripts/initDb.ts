import { openDb } from '../config/database';

async function initDb() {
  const db = await openDb();

  await db.exec(`
    CREATE TABLE IF NOT EXISTS panels (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      address TEXT NOT NULL,
      createdAt TEXT NOT NULL,
      updatedAt TEXT NOT NULL
    )
  `);

  console.log('Database initialized');
  await db.close();
}

initDb().catch(console.error);