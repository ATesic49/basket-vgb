export async function POST(req: Request) {
  const body = await req.json();
  return new Response("Success!", { status: 200 });
}
