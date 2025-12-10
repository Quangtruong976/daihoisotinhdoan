import { NextResponse } from "next/server";
import { redis } from "@/lib/redis";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { phien, pwd } = body;

    if (pwd !== "000000") return NextResponse.json({ error: "Sai mật khẩu" }, { status: 401 });

    // Lấy danh sách hiện tại
    const list = (await redis.get("diemdanh")) || [];
    // Loại bỏ danh sách của phiên
    const newList = list.filter((d: any) => d.phien !== phien);

    await redis.set("diemdanh", newList);

    return NextResponse.json({ ok: true, diemDanhList: newList });
  } catch {
    return NextResponse.json({ error: "Lỗi server" }, { status: 500 });
  }
}
