import { NextResponse } from "next/server";
import { redis } from "@/lib/redis";

export const POST = async (req: Request) => {
  try {
    const { phien } = await req.json();
    if (!phien) return NextResponse.json({ error: "Thiếu phiên" }, { status: 400 });

    const raw = await redis.get("diemdanh");
    let list: any[] = [];
    if (raw && typeof raw === "string") {
      list = JSON.parse(raw);
    }

    const newList = list.filter((d) => d.phien !== phien);

    await redis.set("diemdanh", JSON.stringify(newList));

    return NextResponse.json({ diemDanhList: newList });
  } catch (err) {
    console.error("POST /diemdanh/reset error:", err);
    return NextResponse.json({ error: "Lỗi server" }, { status: 500 });
  }
};
