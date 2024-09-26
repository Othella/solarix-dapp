import { NextResponse } from 'next/server';
import { openDb } from '@/config/database';

export async function GET() {
  const db = await openDb();

  // TODO: Get NFTs from radix blockchain

  const nfts = await db.all('SELECT * FROM nfts');
  await db.close();

  return NextResponse.json(nfts);
}

// TODO: Implement POST to mint a new NFT