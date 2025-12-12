import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "diemdanh.json");
const SECRET_KEY = "SECRET123"; // link ẩn

type DiemDanhItem = { hoTen: string; donVi: string; ngay: string; phien: string };

export async function POST(request: Request) {
  try {
    // Lấy URL và key
    const url = new URL(request.url);
    const key = url.searchParams.get("key");
    if (key !== SECRET_KEY) {
      return NextResponse.json({ message: "Không có quyền" }, { status: 403 });
    }

    // Đọc file JSON
    const raw = await fs.readFile(DATA_FILE, "utf-8");
    const data: { diemDanhList?: DiemDanhItem[] } = JSON.parse(raw);
    if (!data.diemDanhList) data.diemDanhList = [];

    const now = new Date();
    const DATE_OPTIONS = [
      {
        label: "19/12/2025",
        phien: "Phiên thứ 1",
        open: new Date("2025-12-07T08:00:00"),
        close: new Date("2025-12-11T11:00:00"),
      },
      {
        label: "20/12/2025",
        phien: "Phiên trọng thể",
        open: new Date("2025-12-11T06:00:00"),
        close: new Date("2025-12-20T23:59:00"),
      },
    ];

    const current = DATE_OPTIONS.find(d => now >= d.open && now <= d.close);
    if (!current) {
      return NextResponse.json({ message: "Không có phiên hiện tại mở" }, { status: 400 });
    }

    // Xóa mục cũ của phiên
    data.diemDanhList = data.diemDanhList.filter(d => d.ngay !== current.label);

    // Tạo 350 đại biểu
    const TOTAL_DELEGATES = 350;
    const allDelegates: DiemDanhItem[] = Array.from({ length: TOTAL_DELEGATES }, (_, i) => ({
      hoTen: `Đại biểu ${i + 1}`,
      donVi: "Đơn vị",
      ngay: current.label,
      phien: current.phien,
    }));

    data.diemDanhList.push(...allDelegates);

    // Ghi lại file
    await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2));

    return NextResponse.json({ message: `Đã điểm danh toàn bộ ${TOTAL_DELEGATES} đại biểu` });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Lỗi server" }, { status: 500 });
  }
}
