import { NextResponse } from "next/server";

const allowedOrgins =
  process.env.NODE_ENV === "production"
    ? ["https://www.yoursite.com"]
    : ["http://localhost:3000"];

export default function middleware(request: Request) {
  const origin = request.headers.get("origin");
  console.log(origin);

  if (origin && !allowedOrgins.includes(origin)) {
    return new NextResponse(null, {
      status: 400,
      statusText: "orgin not allowed",
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }
  console.log("middleware!");
  console.log(request.method);
  console.log(request.url);
  return NextResponse.next();
}
export const config = {
  matcher: "/api/:path*",
};
