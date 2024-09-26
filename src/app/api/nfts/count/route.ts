import { NextResponse } from 'next/server';
import { openDb } from '@/config/database';

export async function GET() {
  const db = await openDb();

  const result = await db.get('SELECT COUNT(*) as count FROM nfts');
  await db.close();

  return NextResponse.json({ count: result.count });
}