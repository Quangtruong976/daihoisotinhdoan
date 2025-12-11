// app/api/diemdanh/route.ts
import { NextResponse } from "next/server";
import { redis } from "@/lib/redis";

const KEY = "diemdanh_list";

export async function GET() {
  const list = await redis.get(KEY);
  return NextResponse.json({ diemDanhList: list || [] });
}

export async function POST(req: Request) {
  const body = await req.json();
  const { hoTen, donVi, ngay, phien } = body;

  if (!hoTen || !donVi || !ngay || !phien) {
    return NextResponse.json({ error: "Thiếu dữ liệu" }, { status: 400 });
  }

  const current = ((await redis.get(KEY)) as any[]) || [];

  const exists = current.some(
    (d) =>
      d.hoTen.toLowerCase() === hoTen.toLowerCase() &&
      d.phien === phien
  );

  if (exists) {
    return NextResponse.json(
      { error: "Đã điểm danh phiên này" },
      { status: 400 }
    );
  }

  const newItem = { hoTen, donVi, ngay, phien };
  const newList = [...current, newItem];

  await redis.set(KEY, newList);

  return NextResponse.json({ diemDanhList: newList });
}
