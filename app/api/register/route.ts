import prisma from "@/lib/prisma";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  const { username, password }: { username: string; password: string } =
    await req.json();

  const otherUsers = await prisma.user.findFirst({
    where: {
      username: username,
    },
  });
  if (otherUsers) {
    return Response.json("Username vec postoji.");
  } else {
    const newUser = await prisma.user.create({
      data: {
        username: username,
        password: password,
        credits: 5,
        poeni: 0,
        trenerId: 1,
        PlayerUser: {
          createMany: {
            data: [
              {
                playerId: 1,
                status: "topLeft",
              },
              {
                playerId: 2,
                status: "topRight",
              },
              {
                playerId: 3,
                status: "bottomLeft",
              },
              {
                playerId: 4,
                status: "bottomRight",
              },
              {
                playerId: 5,
                status: "center",
              },
            ],
          },
        },
      },
      include: {
        PlayerUser: {
          include: {
            player: true,
          },
        },
        trener: true,
      },
    });
    cookies().set("user", `${newUser.id}`);

    return Response.json(newUser);
  }
}
