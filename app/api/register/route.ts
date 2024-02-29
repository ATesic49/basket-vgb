import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  const { username, password }: { username: string; password: string } =
    await req.json();
  const newUser = await prisma.user.create({
    data: {
      username: username,
      password: password,
      credits: 50,
      poeni: 0,
      trenerId: 1,
    },
  });
  return Response.json(newUser);
}
