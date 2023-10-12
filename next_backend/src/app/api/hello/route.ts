import { NextResponse } from "next/server";
import { limiter } from "../config/limiter";
import { log } from "console";

export async function GET(request: Request) {
  const orgin = request.headers.get("orgin");
  const remaining = await limiter.removeTokens(1);
  console.log("reaming: ", remaining);
  if (remaining < 0) {
    return new NextResponse(null, {
      status: 429,
      statusText: "too Many request",
      headers: {
        "Access-Control-Allow-Orgin": orgin || "*",
        "Content-Type": "text/plain",
      },
    });
  }

  return NextResponse.json({ message: "Hello, Next.js!" });
}
