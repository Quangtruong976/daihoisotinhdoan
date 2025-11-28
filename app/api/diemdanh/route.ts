import { NextRequest, NextResponse } from "next/server";

// Giả lập cơ sở dữ liệu trong bộ nhớ (memory)
// Trong thực tế, bạn dùng DB như MongoDB, Postgres,...
let diemDanhList: {
  hoTen: string;
  donVi: string;
  email: string;
  ngay: string;
  phien: string;
}[] = [];

export async function POST(req: NextRequest) {
  const data = await req.json();
  const { hoTen, donVi, email, ngay, phien } = data;

  if (!hoTen || !donVi || !email || !ngay || !phien) {
    return NextResponse.json({ error: "Thiếu thông tin" }, { status: 400 });
  }

  // Kiểm tra trùng: nếu đã tồn tại cùng họ tên + email + phiên
  const duplicate = diemDanhList.find(
    (d) => d.hoTen === hoTen && d.email === email && d.phien === phien
  );

  if (duplicate) {
    return NextResponse.json({ error: "Đại biểu đã điểm danh" }, { status: 400 });
  }

  diemDanhList.push({ hoTen, donVi, email, ngay, phien });

  return NextResponse.json({ success: true, diemDanhList });
}

export async function GET() {
  return NextResponse.json({ diemDanhList });
}
