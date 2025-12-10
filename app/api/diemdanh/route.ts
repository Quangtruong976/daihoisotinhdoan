import { NextResponse } from "next/server";
import { redis } from "@/lib/redis";

const KEY = "diemdanh";

export async function GET() {
  const list = (await redis.get(KEY)) || [];
  return NextResponse.json({ diemDanhList: list });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { hoTen, donVi, ngay, phien } = body;

    if (!hoTen || !donVi || !ngay || !phien)
      return NextResponse.json({ error: "Thiếu dữ liệu" }, { status: 400 });

    const list = ((await redis.get(KEY)) as any[]) || [];

    const dup = list.find(
      (d) =>
        d.hoTen.toLowerCase() === hoTen.toLowerCase() &&
        d.phien === phien
    );
    if (dup)
      return NextResponse.json(
        { error: "Đại biểu đã điểm danh" },
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
    return NextResponse.json({ error: "Lỗi server" }, { status: 500 });
  }
}
