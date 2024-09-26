import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import { openDb } from '@/config/database';

export async function GET() {
  const db = await openDb();

  const panels = await db.all('SELECT * FROM panels');
  await db.close();

  return NextResponse.json(panels);
}

export async function POST(request: Request) {
  const panel = await request.json();
  const newPanel = {
    id: uuidv4(),
    ...panel,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  const db = await openDb();

  await db.run(
    'INSERT INTO panels (id, title, address, owner, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?)',
    [newPanel.id, newPanel.title, newPanel.address, newPanel.owner, newPanel.createdAt, newPanel.updatedAt]
  );
  await db.close();

  return NextResponse.json(newPanel, { status: 201 });
}

export async function PUT(request: Request) {
  const { id, ...updatedPanel } = await request.json();
  const db = await openDb();

  const result = await db.run(
    'UPDATE panels SET title = ?, address = ?, owner = ?, updatedAt = ? WHERE id = ?',
    [updatedPanel.title, updatedPanel.address, updatedPanel.owner, new Date().toISOString(), id]
  );
  await db.close();

  if (result.changes === 0) {
    return NextResponse.json({ error: 'Panel not found' }, { status: 404 });
  }

  return NextResponse.json({ id, ...updatedPanel });
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const db = await openDb();

  const result = await db.run('DELETE FROM panels WHERE id = ?', id);
  await db.close();

  if (result.changes === 0) {
    return NextResponse.json({ error: 'Panel not found' }, { status: 404 });
  }

  return NextResponse.json({ success: true });
}