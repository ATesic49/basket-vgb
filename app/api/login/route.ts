import prisma from "@/lib/prisma";
import { all } from "axios";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  const { username, password }: { username: string; password: string } =
    await req.json();
  const allUsers = await prisma.user.findMany({
    include: {
      PlayerUser: {
        include: {
          player: true,
        },
      },
      trener: true,
    },
  });
  let user = allUsers.find((user) => user.username === username);
  if (!user) {
    return Response.json("user not found");
  } else if (user.password !== password) {
    return Response.json(null);
  } else {
    cookies().set("user", `${user.id}`, { maxAge: 60 * 60 * 24 * 7 * 1000 });
    return Response.json(user);
  }
}
