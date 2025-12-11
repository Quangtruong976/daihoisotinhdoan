// app/api/diemdanh/route.ts
import { NextResponse } from "next/server";
import { redis } from "@/lib/redis";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { hoTen, donVi } = body;

    if (!hoTen || !donVi) {
      return NextResponse.json({ ok: false, message: "Thiếu dữ liệu" });
    }

    // KEY lưu danh sách điểm danh
    const KEY = "diemdanh:list";

    // Lưu data vào Redis (dạng List)
    await redis.rpush(KEY, JSON.stringify({ hoTen, donVi, time: Date.now() }));

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Lỗi điểm danh:", err);
    return NextResponse.json({ ok: false, message: "Lỗi server" });
  }
}

export async function GET() {
  try {
    const KEY = "diemdanh:list";

    const list = await redis.lrange(KEY, 0, -1);
    const parsed = list.map((item) => JSON.parse(item));

    return NextResponse.json({ ok: true, data: parsed });
  } catch {
    return NextResponse.json({ ok: false, data: [] });
  }
}
