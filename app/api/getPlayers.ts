import prisma from "@/lib/prisma";

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
