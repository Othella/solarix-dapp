import { NextResponse } from 'next/server';
import { openDb } from '@/config/database';

export async function GET() {
  const db = await openDb();

  // TODO: interact with blockchain to get count of panels

  const result = await db.get('SELECT COUNT(*) as count FROM panels');
  await db.close();

  return NextResponse.json({ count: result.count });
}