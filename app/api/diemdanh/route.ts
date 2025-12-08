import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "diemdanh.json");

async function readData() {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(raw);
  } catch {
    return { diemDanhList: [] };
  }
}

async function writeData(obj: any) {
  await fs.mkdir(path.join(process.cwd(), "data"), { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(obj, null, 2), "utf-8");
}

export async function GET() {
  const data = await readData();
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { hoTen, donVi, ngay, phien } = body;
    if (!hoTen || !donVi || !ngay || !phien) return NextResponse.json({ error: "Thiếu trường bắt buộc" }, { status: 400 });

    const data = await readData();
    const list = data.diemDanhList || [];

    const key = (s: string) => s.trim().toLowerCase();

    // Kiểm tra trùng
    const dup = list.find(d => key(d.hoTen) === key(hoTen) && d.phien === phien);
    if (dup) return NextResponse.json({ error: "Đại biểu đã điểm danh cho phiên này" }, { status: 400 });

    const item = { hoTen, donVi, ngay, phien, time: new Date().toISOString() };
    list.push(item);
    await writeData({ diemDanhList: list });

    return NextResponse.json({ success: true, diemDanhList: list });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Lỗi server" }, { status: 500 });
  }
}
