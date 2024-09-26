import { openDb } from '../config/database';

async function initDb() {
  const db = await openDb();

  await db.exec(`
    CREATE TABLE IF NOT EXISTS panels (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      address TEXT NOT NULL,
      owner TEXT NOT NULL,
      createdAt TEXT NOT NULL,
      updatedAt TEXT NOT NULL
    );
  `);

  console.log('Created panels table');

  await db.exec(`
    CREATE TABLE IF NOT EXISTS nfts (
      id TEXT PRIMARY KEY,
      panelId TEXT NOT NULL,
      tokenId TEXT NOT NULL,
      address TEXT NOT NULL,
      owner TEXT NOT NULL,
      createdAt TEXT NOT NULL,
      updatedAt TEXT NOT NULL
    );
  `);

  console.log('Created nfts table');

  await db.exec(`
    CREATE TABLE IF NOT EXISTS transactions (
      id TEXT PRIMARY KEY,
      panelId TEXT NOT NULL,
      amount TEXT NOT NULL,
      createdAt TEXT NOT NULL,
      updatedAt TEXT NOT NULL
    );
  `);

  console.log('Created transactions table');

  console.log('Database initialized');
  await db.close();
}

initDb().catch(console.error);