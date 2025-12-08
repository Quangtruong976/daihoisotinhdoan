import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const DIR = path.join(process.cwd(), "data");
const DB_PATH = path.join(DIR, "diemdanh.json");

type DiemDanhItem = {
  hoTen: string;
  donVi: string;
  ngay: string;
  phien: string; // để đồng nhất, lưu chuỗi
  time: string;
};

export async function POST(req: Request) {
  try {
    let bodyText = await req.text();

    // Chặn lỗi JSON không hợp lệ
    if (!bodyText) {
      return NextResponse.json({ error: "Body rỗng" }, { status: 400 });
    }

    let body;
    try {
      body = JSON.parse(bodyText);
    } catch {
      return NextResponse.json({ error: "JSON không hợp lệ" }, { status: 400 });
    }

    const { hoTen, donVi, ngay, phien } = body;

    if (!hoTen || !donVi || !ngay || !phien) {
      return NextResponse.json({ error: "Thiếu dữ liệu" }, { status: 400 });
    }

    // Chuẩn hoá phien thành chuỗi để tránh lỗi kiểu
    const phienStr = String(phien).trim();

    if (!fs.existsSync(DIR)) fs.mkdirSync(DIR, { recursive: true });
    if (!fs.existsSync(DB_PATH))
      fs.writeFileSync(DB_PATH, JSON.stringify({ diemDanhList: [] }, null, 2));

    const raw = fs.readFileSync(DB_PATH, "utf8");
    const data = JSON.parse(raw);
    const list: DiemDanhItem[] = data.diemDanhList || [];

    const key = (s: string) => s.trim().toLowerCase();

    // Kiểm tra trùng tên + phiên
    const dup = list.find(
      (d: DiemDanhItem) =>
        key(d.hoTen) === key(hoTen) && d.phien === phienStr
    );

    if (dup) {
      return NextResponse.json(
        { error: "Đại biểu đã điểm danh phiên này" },
        { status: 400 }
      );
    }

    const item: DiemDanhItem = {
      hoTen,
      donVi,
      ngay,
      phien: phienStr,
      time: new Date().toISOString()
    };

    list.push(item);
    data.diemDanhList = list;

    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), "utf8");

    return NextResponse.json({ ok: true, data: item });
  } catch (e) {
    return NextResponse.json({ error: "Lỗi xử lý server" }, { status: 500 });
  }
}
