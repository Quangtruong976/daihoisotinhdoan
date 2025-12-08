import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const DIR = path.join(process.cwd(), "data");
const DB_PATH = path.join(DIR, "diemdanh.json");

export async function POST(req: Request) {
  try {
    const { phien } = await req.json();

    if (!phien) {
      return NextResponse.json({ error: "Thiếu phiên" }, { status: 400 });
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
    let data = JSON.parse(raw);

    // Xoá đúng phiên
    data.diemDanhList = data.diemDanhList.filter(
      (item: any) => item.phien !== phien
    );

    // Ghi lại file
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), "utf8");

    return NextResponse.json({
      ok: true,
      diemDanhList: data.diemDanhList
    });
  } catch (e) {
    return NextResponse.json({ error: "Lỗi xử lý" }, { status: 500 });
  }
}
