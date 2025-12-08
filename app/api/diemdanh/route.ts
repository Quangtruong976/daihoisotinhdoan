import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const DIR = path.join(process.cwd(), "data");
const DB_PATH = path.join(DIR, "diemdanh.json");

type DiemDanhItem = {
  hoTen: string;
  donVi: string;
  ngay: string;
  phien: number;
  time: string;
};

export async function POST(req: Request) {
  try {
    const { hoTen, donVi, ngay, phien } = await req.json();

    if (!hoTen || !donVi || !ngay || !phien) {
      return NextResponse.json({ error: "Thiếu dữ liệu" }, { status: 400 });
    }

    // Tạo thư mục nếu chưa có
    if (!fs.existsSync(DIR)) {
      fs.mkdirSync(DIR, { recursive: true });
    }

    // Tạo file nếu chưa có
    if (!fs.existsSync(DB_PATH)) {
      fs.writeFileSync(DB_PATH, JSON.stringify({ diemDanhList: [] }, null, 2));
    }

    // Đọc file
    const raw = fs.readFileSync(DB_PATH, "utf8");
    const data = JSON.parse(raw);

    const list: DiemDanhItem[] = data.diemDanhList || [];

    // Hàm chuẩn hóa họ tên
    const key = (s: string) => s.trim().toLowerCase();

    // Kiểm tra trùng
    const dup = list.find(
      (d: DiemDanhItem) =>
        key(d.hoTen) === key(hoTen) && d.phien === phien
    );

    if (dup) {
      return NextResponse.json(
        { error: "Đại biểu đã điểm danh cho phiên này" },
        { status: 400 }
      );
    }

    const item: DiemDanhItem = {
      hoTen,
      donVi,
      ngay,
      phien,
      time: new Date().toISOString(),
    };

    // Lưu mới
    list.push(item);

    // Ghi lại file
    data.diemDanhList = list;
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), "utf8");

    return NextResponse.json({ ok: true, data: item });
  } catch (e) {
    return NextResponse.json({ error: "Lỗi xử lý" }, { status: 500 });
  }
}
