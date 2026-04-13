import Redis from "ioredis";

if (!process.env.REDIS_URL) {
  throw new Error("REDIS_URL not set");
}

export const redis = new Redis(process.env.REDIS_URL, {
  tls: {}
});

redis.on("connect", () => {
  console.log("Redis connected");
});

redis.on("error", (err) => {
  console.error("Redis error:", err);
});