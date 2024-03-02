import prisma from "@/lib/prisma";
import { trener } from "../redux/slices/trenerSlice";

export const getPlayers = async () => {
  return await prisma.player.findMany({
    include: {
      playerKolo: {
        select: {
          kolo: true,
          poeni: true,
          asistencije: true,
          skokovi: true,
          ukradeneLopte: true,
          blokovi: true,
          ukupno: true,
        },
      },
    },
  });
};

export const getTrainers = async () => {
  return (await prisma.trener.findMany()) as trener[];
};
