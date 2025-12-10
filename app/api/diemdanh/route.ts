import { NextResponse } from "next/server";
import { redis } from "@/lib/redis";

type Row = { hoTen: string; donVi: string; ngay?: string; phien?: string };

export const GET = async () => {
  try {
    const raw: string | null = await redis.get("diemdanh");
    const list: Row[] = raw ? JSON.parse(raw) : [];
    return NextResponse.json({ diemDanhList: list });
  } catch (err) {
    console.error("GET /diemdanh error:", err);
    return NextResponse.json({ error: "Lỗi server" }, { status: 500 });
  }
};

export const POST = async (req: Request) => {
  try {
    const body: Row = await req.json();
    const { hoTen, donVi, ngay, phien } = body;

    if (!hoTen || !donVi || !ngay || !phien)
      return NextResponse.json({ error: "Thiếu dữ liệu" }, { status: 400 });

    const raw: string | null = await redis.get("diemdanh");
    const list: Row[] = raw ? JSON.parse(raw) : [];

    if (list.some((d) => d.hoTen.toLowerCase() === hoTen.toLowerCase() && d.phien === phien))
      return NextResponse.json({ error: "Đại biểu đã điểm danh" }, { status: 400 });

    const newList = [...list, { hoTen, donVi, ngay, phien }];
    await redis.set("diemdanh", JSON.stringify(newList));

    return NextResponse.json({ ok: true, diemDanhList: newList });
  } catch (err) {
    console.error("POST /diemdanh error:", err);
    return NextResponse.json({ error: "Lỗi server" }, { status: 500 });
  }
};
