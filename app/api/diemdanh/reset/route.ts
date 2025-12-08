import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const DIR = path.join(process.cwd(), "data");
const DB_PATH = path.join(DIR, "diemdanh.json");

export async function POST(req: Request) {
  try {
    const { phien } = await req.json();
    if (!phien) return NextResponse.json({ error: "Thiếu phiên" }, { status: 400 });

    if (!fs.existsSync(DB_PATH)) return NextResponse.json({ diemDanhList: [] });

    const data = JSON.parse(fs.readFileSync(DB_PATH, "utf8"));
    data.diemDanhList = data.diemDanhList.filter((d: any) => d.phien !== phien);

    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
    return NextResponse.json({ diemDanhList: data.diemDanhList });
  } catch {
    return NextResponse.json({ error: "Lỗi server" }, { status: 500 });
  }
}
