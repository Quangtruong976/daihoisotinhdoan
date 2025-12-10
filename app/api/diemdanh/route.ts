import { NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

const KEY = "diemdanh_list";

export async function GET() {
  try {
    const data = (await redis.get(KEY)) || [];
    return NextResponse.json({ diemDanhList: data });
  } catch (err) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { hoTen, donVi, ngay, phien } = body;

    if (!hoTen || !donVi || !ngay || !phien)
      return NextResponse.json(
        { error: "Thiếu dữ liệu" },
        { status: 400 }
      );

    const list = ((await redis.get(KEY)) as any[]) || [];

    const dup = list.find(
      (d) =>
        d.hoTen.toLowerCase() === hoTen.toLowerCase() &&
        d.phien === phien
    );

    if (dup)
      return NextResponse.json(
        { error: "Đã điểm danh" },
        { status: 400 }
      );

    const item = {
      hoTen,
      donVi,
      ngay,
      phien,
      time: new Date().toISOString(),
    };

    list.push(item);

    await redis.set(KEY, list);

    return NextResponse.json({ ok: true, diemDanhList: list });
  } catch (err) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
