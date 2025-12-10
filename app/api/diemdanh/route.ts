import { NextResponse } from "next/server";
import { redis } from "@/lib/redis";

type DiemDanhItem = {
  hoTen: string;
  donVi: string;
  ngay: string;
  phien: string;
};

export async function GET() {
  try {
    const list: DiemDanhItem[] = (await redis.get("diemdanh")) || [];
    return NextResponse.json({ diemDanhList: list });
  } catch {
    return NextResponse.json({ error: "Lỗi server" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { hoTen, donVi, ngay, phien } = body;

    if (!hoTen || !donVi || !ngay || !phien)
      return NextResponse.json({ error: "Thiếu dữ liệu" }, { status: 400 });

    // Lấy danh sách hiện tại
    const list: DiemDanhItem[] = (await redis.get("diemdanh")) || [];

    // Kiểm tra trùng
    if (list.some(d => d.hoTen.toLowerCase() === hoTen.toLowerCase() && d.phien === phien))
      return NextResponse.json({ error: "Đại biểu đã điểm danh" }, { status: 400 });

    const newItem: DiemDanhItem = { hoTen, donVi, ngay, phien };
    const newList = [...list, newItem];

    await redis.set("diemdanh", newList);

    return NextResponse.json({ ok: true, diemDanhList: newList });
  } catch {
    return NextResponse.json({ error: "Lỗi server" }, { status: 500 });
  }
}
