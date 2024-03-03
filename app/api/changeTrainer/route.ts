import prisma from "@/lib/prisma";
import { NextRequest } from "next/server";

export async function POST(req: Request) {
  const {
    id,
    userId,
    naTerenuId,
  }: { id: number; userId: number; naTerenuId: number } = await req.json();

  const cena = await prisma.trener.findFirst({
    where: {
      id: naTerenuId,
    },
    select: {
      xena: true,
    },
  });

  const minusCena = await prisma.trener.findFirst({
    where: {
      id,
    },
    select: {
      xena: true,
    },
  });

  const updateUser = await prisma.user.update({
    where: { id: userId },
    data: {
      trenerId: id,
      credits: {
        increment: cena!.xena - minusCena!.xena,
      },
    },
    include: { trener: true },
  });

  return Response.json({ updateUser });
}
