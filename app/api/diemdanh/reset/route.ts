import { NextResponse } from "next/server";
import { redis } from "@/lib/redis";

export const POST = async (req: Request) => {
  try {
    const { phien } = await req.json();
    if (!phien) return NextResponse.json({ error: "Thiếu phiên" }, { status: 400 });

    const raw = await redis.get("diemdanh");
    const list = raw ? JSON.parse(raw) : [];
    const newList = list.filter((d: any) => d.phien !== phien);

    await redis.set("diemdanh", JSON.stringify(newList));

    return NextResponse.json({ diemDanhList: newList });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Lỗi server" }, { status: 500 });
  }
};
