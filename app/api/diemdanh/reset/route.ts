// app/api/diemdanh/reset/route.ts
import { NextResponse } from "next/server";
import { redis } from "@/lib/redis";

const KEY = "diemdanh_list";

export async function POST(req: Request) {
  const { phien } = await req.json();

  const current = ((await redis.get(KEY)) as any[]) || [];

  const newList = current.filter((d) => d.phien !== phien);

  await redis.set(KEY, newList);

  return NextResponse.json({ diemDanhList: newList });
}
