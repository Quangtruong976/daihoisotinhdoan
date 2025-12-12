import { NextResponse } from "next/server";
import { redis } from "@/lib/redis";

const SECRET_KEY = "SECRET123";

export async function POST(request: Request) {
  try {
    const url = new URL(request.url);
    const key = url.searchParams.get("key");

    if (key !== SECRET_KEY) {
      return NextResponse.json({ message: "Không có quyền" }, { status: 403 });
    }

    const now = new Date();
    const DATE_OPTIONS = [
      { label: "19/12/2025", phien: "Phiên thứ 1", open: new Date("2025-12-07T08:00:00"), close: new Date("2025-12-11T11:00:00") },
      { label: "20/12/2025", phien: "Phiên trọng thể", open: new Date("2025-12-11T06:00:00"), close: new Date("2025-12-20T23:59:00") },
    ];

    const current = DATE_OPTIONS.find(d => now >= d.open && now <= d.close);
    if (!current) {
      return NextResponse.json({ message: "Không có phiên hiện tại mở" }, { status: 400 });
    }

    const TOTAL_DELEGATES = 350;
    const list = Array.from({ length: TOTAL_DELEGATES }, (_, i) => ({
      hoTen: `Đại biểu ${i + 1}`,
      donVi: "Đơn vị",
      ngay: current.label,
      phien: current.phien,
    }));

    // Lưu danh sách vào Redis theo ngày
    await redis.json.set(`diemdanh:${current.label}`, "$", list);

    return NextResponse.json({ message: `Đã điểm danh toàn bộ ${TOTAL_DELEGATES} đại biểu` });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Lỗi server" }, { status: 500 });
  }
}
