import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import * as XLSX from "xlsx";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "public", "data", "danhsach.xlsx");

    const buffer = await fs.readFile(filePath);

    // Đọc file Excel trực tiếp dạng buffer
    const workbook = XLSX.read(buffer, { type: "buffer" });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const json = XLSX.utils.sheet_to_json(sheet);

    const list = json.map((r: any) => ({
      hoTen: r.hoTen || r["Họ tên"] || r["hoten"] || "",
      donVi: r.donVi || r["Đơn vị"] || r["donvi"] || "",
    }));

    return NextResponse.json({ list });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Không đọc được file Excel", detail: error.message },
      { status: 500 }
    );
  }
}
