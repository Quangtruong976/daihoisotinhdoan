// lib/redis.ts
import { Redis } from "@upstash/redis";

// Các biến này sẽ lấy từ environment variables trên Vercel
export const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});
