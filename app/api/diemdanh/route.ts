import { NextResponse } from "next/server";
import { redis } from "@/lib/redis";

type DiemDanhItem = {
  hoTen: string;
  donVi: string;
  ngay: string;
  phien: string;
  time: string;
};

export const GET = async () => {
  try {
    const raw = await redis.get("diemdanh");
    let list: DiemDanhItem[] = [];
    if (raw && typeof raw === "string") {
      list = JSON.parse(raw);
    }

    return NextResponse.json({ diemDanhList: list });
  } catch (err) {
    console.error("GET /diemdanh error:", err);
    return NextResponse.json({ error: "Lỗi server" }, { status: 500 });
  }
};

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    const { hoTen, donVi, ngay, phien } = body;

    if (!hoTen || !donVi || !ngay || !phien) {
      return NextResponse.json({ error: "Thiếu dữ liệu" }, { status: 400 });
    }

    const raw = await redis.get("diemdanh");
    let list: DiemDanhItem[] = [];
    if (raw && typeof raw === "string") {
      list = JSON.parse(raw);
    }

    // Kiểm tra duplicate
    const dup = list.find(
      (d) => d.hoTen.toLowerCase() === hoTen.toLowerCase() && d.phien === phien
    );
    if (dup) {
      return NextResponse.json({ error: "Đại biểu đã điểm danh" }, { status: 400 });
    }

    const item: DiemDanhItem = { hoTen, donVi, ngay, phien, time: new Date().toISOString() };
    list.push(item);

    await redis.set("diemdanh", JSON.stringify(list));

    return NextResponse.json({ ok: true, diemDanhList: list });
  } catch (err) {
    console.error("POST /diemdanh error:", err);
    return NextResponse.json({ error: "Lỗi server" }, { status: 500 });
  }
};
