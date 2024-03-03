import prisma from "@/lib/prisma";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  const {
    id,
    userId,
    naTerenuId,
  }: { id: number; userId: number; naTerenuId: number } = await req.json();

  const cena = await prisma.player.findFirst({
    where: {
      id: naTerenuId,
    },
    select: {
      cena: true,
    },
  });
  const minusCredits = await prisma.player.findFirst({
    where: {
      id,
    },

    select: {
      cena: true,
    },
  });
  const updateUser = prisma.user.update({
    where: { id: userId },
    data: {
      credits: {
        increment: cena!.cena - minusCredits!.cena,
      },
    },
  });

  const updateTeren = prisma.playerUser.update({
    where: {
      playerId_userId: {
        playerId: naTerenuId,
        userId: userId,
      },
    },
    data: {
      playerId: id,
    },
    include: {
      player: true,
    },
  });

  await prisma.$transaction([updateUser, updateTeren]);

  const userr = await prisma.user.findFirst({
    where: { id: userId },
    include: {
      PlayerUser: {
        include: { player: true },
      },
    },
  });

  return Response.json({
    id,
    userId,
    naTerenuId,
    cena: cena?.cena,
    updateUser: userr?.PlayerUser,
  });
}
