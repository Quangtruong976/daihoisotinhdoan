import { NextResponse } from "next/server";
import { redis } from "@/lib/redis";

type DiemDanhItem = {
  hoTen: string;
  donVi: string;
  ngay: string;
  phien: string;
  time: string;
};

// GET: lấy toàn bộ
export async function GET() {
  const list = (await redis.get("diemdanh")) as DiemDanhItem[] | null;
  return NextResponse.json({ diemDanhList: list || [] });
}

// POST: ghi 1 dòng mới
export async function POST(req: Request) {
  try {
    const { hoTen, donVi, ngay, phien } = await req.json();

    if (!hoTen || !donVi || !ngay || !phien)
      return NextResponse.json({ error: "Thiếu dữ liệu" }, { status: 400 });

    const list = ((await redis.get("diemdanh")) as DiemDanhItem[]) || [];

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

    const item: DiemDanhItem = {
      hoTen,
      donVi,
      ngay,
      phien,
      time: new Date().toISOString(),
    };

    list.push(item);

    await redis.set("diemdanh", list);

    return NextResponse.json({ ok: true, diemDanhList: list });
  } catch {
    return NextResponse.json({ error: "Lỗi server" }, { status: 500 });
  }
}
