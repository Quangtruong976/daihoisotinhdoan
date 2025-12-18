import { NextResponse } from "next/server";
import { redis } from "@/lib/redis";

const KEY = "diemdanh_list";
const SECRET_KEY = "SECRET123";

export async function POST(req: Request) {
  try {
    const url = new URL(req.url);
    const key = url.searchParams.get("key");
    if (key !== SECRET_KEY) {
      return NextResponse.json({ message: "Không có quyền" }, { status: 403 });
    }

    // Xác định phiên hiện tại
    const now = new Date();
    const DATE_OPTIONS = [
      {
        label: "19/12/2025",
        phien: "Phiên thứ 1",
        open: new Date("2025-12-17T23:07:00"),
        close: new Date("2025-12-19T18:00:00"),
      },
      {
        label: "20/12/2025",
        phien: "Phiên trọng thể",
        open: new Date("2025-12-19T19:00:00"),
        close: new Date("2025-12-20T12:00:00"),
      },
    ];

    const current = DATE_OPTIONS.find(d => now >= d.open && now <= d.close);
    if (!current) {
      return NextResponse.json({ message: "Không có phiên hiện tại mở" }, { status: 400 });
    }

    const TOTAL_DELEGATES = 350;
    const allDelegates = Array.from({ length: TOTAL_DELEGATES }, (_, i) => ({
      hoTen: `Đại biểu ${i + 1}`,
      donVi: "Đơn vị",
      ngay: current.label,
      phien: current.phien,
    }));

    // Ghi vào Redis key dùng chung với trang thống kê
    await redis.set(KEY, allDelegates);

    return NextResponse.json({ message: `Đã điểm danh toàn bộ ${TOTAL_DELEGATES} đại biểu` });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Lỗi server" }, { status: 500 });
  }
}
