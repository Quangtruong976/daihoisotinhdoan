import { NextResponse } from "next/server";
import { redis } from "@/lib/redis";

export const GET = async () => {
  try {
    const raw = await redis.get("diemdanh");
    const list = raw ? JSON.parse(raw) : [];
    return NextResponse.json({ diemDanhList: list });
  } catch (err) {
    return NextResponse.json({ error: "Lỗi server" }, { status: 500 });
  }
};

export const POST = async (req: Request) => {
  try {
    const { hoTen, donVi, ngay, phien } = await req.json();
    if (!hoTen || !donVi || !ngay || !phien)
      return NextResponse.json({ error: "Thiếu dữ liệu" }, { status: 400 });

    const raw = await redis.get("diemdanh");
    const list = raw ? JSON.parse(raw) : [];

    if (list.some((d: any) => d.hoTen.toLowerCase() === hoTen.toLowerCase() && d.phien === phien))
      return NextResponse.json({ error: "Đại biểu đã điểm danh" }, { status: 400 });

    const newItem = { hoTen, donVi, ngay, phien, time: new Date().toISOString() };
    const newList = [...list, newItem];

    await redis.set("diemdanh", JSON.stringify(newList));

    return NextResponse.json({ ok: true, diemDanhList: newList });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Lỗi server" }, { status: 500 });
  }
};
