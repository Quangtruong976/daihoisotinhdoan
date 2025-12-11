import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data/diemdanh.json");

export async function POST() {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf-8");
    const data = JSON.parse(raw);

    const updated = data.diemDanhList.map((d: any) => ({
      ...d,
      trangThai: "Đã điểm danh",
    }));

    await fs.writeFile(
      DATA_FILE,
      JSON.stringify({ diemDanhList: updated }, null, 2)
    );

    return NextResponse.json({ message: "Đã điểm danh toàn bộ đại biểu.", diemDanhList: updated });
  } catch (err) {
    return NextResponse.json({ error: "Lỗi xử lý!" }, { status: 500 });
  }
}
