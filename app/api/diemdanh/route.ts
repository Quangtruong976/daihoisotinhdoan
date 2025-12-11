import { NextResponse } from "next/server";
import { redis } from "@/lib/redis";

export async function POST(req: Request) {
  const body = await req.json();
  const { hoTen, donVi } = body;

  const KEY = "diemdanh:list";
  await redis.rpush(KEY, JSON.stringify({ hoTen, donVi, time: Date.now() }));

  return NextResponse.json({ ok: true });
}

export async function GET() {
  const KEY = "diemdanh:list";
  const list = await redis.lrange(KEY, 0, -1);
  const data = list.map((x) => JSON.parse(x));
  return NextResponse.json({ ok: true, data });
}
