import { NextResponse } from "next/server";
import { redis } from "@/lib/redis";

export const POST = async (req: Request) => {
  try {
    const { phien } = await req.json();
    if (!phien) return NextResponse.json({ error: "Thiếu phiên" }, { status: 400 });

    const list = (await redis.get("diemdanh")) || [];
    const newList = list.filter((d: any) => d.phien !== phien);
    await redis.set("diemdanh", newList);

    return NextResponse.json({ diemDanhList: newList });
  } catch (err) {
    console.error("POST /diemdanh/reset error:", err);
    return NextResponse.json({ error: "Lỗi server" }, { status: 500 });
  }
};
