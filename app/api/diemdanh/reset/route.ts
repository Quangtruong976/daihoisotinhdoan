import { NextResponse } from "next/server";
import { redis } from "@/lib/redis";

export async function POST(req: Request) {
  const { phien, pwd } = await req.json();
  if (pwd !== "000000") return NextResponse.json({ error: "Sai mật khẩu" }, { status: 401 });

  const list: any[] = (await redis.get("diemdanh")) || [];
  const newList = list.filter(d => d.phien !== phien);
  await redis.set("diemdanh", newList);

  return NextResponse.json({ diemDanhList: newList });
}
