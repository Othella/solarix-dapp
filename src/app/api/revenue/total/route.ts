import { NextResponse } from 'next/server';
import { openDb } from '@/config/database';

export async function GET() {
  const db = await openDb();

  // TODO: interact with blockchain to get total revenue

  const result = await db.get('SELECT SUM(amount) as total FROM transactions');
  await db.close();

  return NextResponse.json({ total: result.total || 0 });
}