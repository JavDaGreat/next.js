export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const obj = Object.fromEntries(searchParams.entries());

  return Response.json(obj);
}
