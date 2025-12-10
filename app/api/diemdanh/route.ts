import { NextResponse } from "next/server";
import { redis } from "@/lib/redis";
import fs from "fs/promises";
import path from "path";
import * as XLSX from "xlsx";

async function getDanhSach() {
  const filePath = path.join(process.cwd(), "public", "data", "danhsach.xlsx");
  const buffer = await fs.readFile(filePath);
  const workbook = XLSX.read(buffer, { type: "buffer" });
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const json = XLSX.utils.sheet_to_json(sheet);
  return json.map((r: any) => ({
    hoTen: r.hoTen || r["Họ tên"] || r["hoten"] || "",
    donVi: r.donVi || r["Đơn vị"] || r["donvi"] || "",
  }));
}

export const GET = async () => {
  const list = (await redis.get("diemdanh")) || [];
  return NextResponse.json({ diemDanhList: list });
};

export const POST = async (req: Request) => {
  try {
    const { hoTen, donVi, ngay, phien } = await req.json();

    if (!hoTen || !donVi || !ngay || !phien)
      return NextResponse.json({ error: "Thiếu dữ liệu" }, { status: 400 });

    const danhSach = await getDanhSach();
    if (!danhSach.some(d => d.hoTen.toLowerCase() === hoTen.toLowerCase())) {
      return NextResponse.json({ error: "Đại biểu không có trong danh sách" }, { status: 403 });
    }

    const list = (await redis.get("diemdanh")) || [];
    if (list.some((d: any) => d.hoTen.toLowerCase() === hoTen.toLowerCase() && d.phien === phien)) {
      return NextResponse.json({ error: "Đại biểu đã điểm danh" }, { status: 409 });
    }

    const newItem = { hoTen, donVi, ngay, phien, time: new Date().toISOString() };
    const newList = [...list, newItem];
    await redis.set("diemdanh", newList);

    return NextResponse.json({ diemDanhList: newList });
  } catch (err) {
    console.error("POST /diemdanh error:", err);
    return NextResponse.json({ error: "Lỗi server" }, { status: 500 });
  }
};
