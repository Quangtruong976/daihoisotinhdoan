import { NextResponse } from "next/server";
import { redis } from "@/lib/redis";

const KEY = "diemdanh";

export async function POST(req: Request) {
  try {
    const { phien } = await req.json();
    if (!phien)
      return NextResponse.json({ error: "Thiếu phiên" }, { status: 400 });

    const list = ((await redis.get(KEY)) as any[]) || [];

    const filtered = list.filter((d) => d.phien !== phien);

    await redis.set(KEY, filtered);

    return NextResponse.json({ ok: true, diemDanhList: filtered });
  } catch {
    return NextResponse.json({ error: "Lỗi server" }, { status: 500 });
  }
}
