import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const DB_PATH = path.join(process.cwd(), "data", "diemdanh.json");

export async function POST(req: Request) {
  try {
    const { phien } = await req.json();
    if (!phien) {
      return NextResponse.json({ error: "Thiếu phiên" }, { status: 400 });
    }

    let data = { diemDanhList: [] as any[] };

    if (fs.existsSync(DB_PATH)) {
      data = JSON.parse(fs.readFileSync(DB_PATH, "utf8"));
    }

    // Xoá đúng phiên
    data.diemDanhList = data.diemDanhList.filter(
      (item: any) => item.phien !== phien
    );

    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), "utf8");

    return NextResponse.json({ diemDanhList: data.diemDanhList });
  } catch (e) {
    return NextResponse.json({ error: "Lỗi xử lý" }, { status: 500 });
  }
}
