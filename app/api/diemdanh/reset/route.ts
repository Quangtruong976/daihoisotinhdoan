import { NextResponse } from "next/server";
import { redis } from "@/lib/redis";

type Row = { hoTen: string; donVi: string; ngay?: string; phien?: string };

export const POST = async (req: Request) => {
  try {
    const { phien }: { phien?: string } = await req.json();
    if (!phien) return NextResponse.json({ error: "Thiếu phiên" }, { status: 400 });

    const raw: string | null = await redis.get("diemdanh");
    const list: Row[] = raw ? JSON.parse(raw) : [];

    const newList = list.filter((d) => d.phien !== phien);
    await redis.set("diemdanh", JSON.stringify(newList));

    return NextResponse.json({ diemDanhList: newList });
  } catch (err) {
    console.error("POST /diemdanh/reset error:", err);
    return NextResponse.json({ error: "Lỗi server" }, { status: 500 });
  }
};
