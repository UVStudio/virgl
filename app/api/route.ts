import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  console.log('hit: ', req);
  const body = await req.json();
  console.log('body: ', body);
  return NextResponse.json(body, {
    status: 200,
  });
}
