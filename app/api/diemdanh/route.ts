import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const DIR = path.join(process.cwd(), "data");
const DB_PATH = path.join(DIR, "diemdanh.json");

type DiemDanhItem = {
  hoTen: string;
  donVi: string;
  ngay: string;
  phien: string;
  time: string;
};

export async function GET() {
  if (!fs.existsSync(DB_PATH)) return NextResponse.json({ diemDanhList: [] });

  const raw = fs.readFileSync(DB_PATH, "utf8");
  const data = JSON.parse(raw);
  return NextResponse.json(data);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { hoTen, donVi, ngay, phien } = body;
    if (!hoTen || !donVi || !ngay || !phien)
      return NextResponse.json({ error: "Thiếu dữ liệu" }, { status: 400 });

    if (!fs.existsSync(DIR)) fs.mkdirSync(DIR, { recursive: true });
    if (!fs.existsSync(DB_PATH))
      fs.writeFileSync(DB_PATH, JSON.stringify({ diemDanhList: [] }, null, 2));

    const data = JSON.parse(fs.readFileSync(DB_PATH, "utf8"));
    const list: DiemDanhItem[] = data.diemDanhList || [];

    const dup = list.find(
      (d) => d.hoTen.toLowerCase() === hoTen.toLowerCase() && d.phien === phien
    );
    if (dup) return NextResponse.json({ error: "Đại biểu đã điểm danh" }, { status: 400 });

    const item: DiemDanhItem = { hoTen, donVi, ngay, phien, time: new Date().toISOString() };
    list.push(item);
    data.diemDanhList = list;

    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
    return NextResponse.json({ ok: true, diemDanhList: list });
  } catch {
    return NextResponse.json({ error: "Lỗi server" }, { status: 500 });
  }
}
