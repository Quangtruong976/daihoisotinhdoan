// app/api/diemdanh/reset/route.ts
import { NextResponse } from "next/server";
import { redis } from "@/lib/redis";

export const dynamic = "force-dynamic";

const LIST_KEY = "diemdanh:list";
const seenKeyFor = (phien: string) => `diemdanh:seen:${phien}`;

export async function POST(req: Request) {
  try {
    const { phien }: { phien?: string } = await req.json();
    if (!phien) return NextResponse.json({ error: "Thiếu phiên" }, { status: 400 });

    // 1) Xoá set seen của phiên này
    await redis.del(seenKeyFor(phien));

    // 2) Lấy tất cả record, lọc ra những record không thuộc phien, rồi ghi lại list
    const items: string[] = (await redis.lrange(LIST_KEY, 0, -1)) || [];
    const keeper = items
      .map((s) => {
        try {
          return JSON.parse(s);
        } catch {
          return null;
        }
      })
      .filter(Boolean)
      .filter((r: any) => r.phien !== phien);

    // Xóa key list và push lại phần tử cần giữ
    await redis.del(LIST_KEY);
    if (keeper.length > 0) {
      // Redis RPUSH expects multiple args; Upstash redis.rpush accepts array
      await redis.rpush(LIST_KEY, ...keeper.map((r: any) => JSON.stringify(r)));
    }

    // Trả về danh sách mới
    const newItems: string[] = (await redis.lrange(LIST_KEY, 0, -1)) || [];
    const newList = newItems.map((s) => JSON.parse(s));

    return NextResponse.json({ ok: true, diemDanhList: newList });
  } catch (err) {
    console.error("POST /api/diemdanh/reset error:", err);
    return NextResponse.json({ error: "Lỗi server" }, { status: 500 });
  }
}
