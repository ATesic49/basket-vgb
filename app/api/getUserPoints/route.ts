import prisma from "@/lib/prisma";
import { getUserById, getUserCookie } from "../getuser";

export default async function setUserPoints(indexKola: number) {
  const users = await prisma.user.findMany({
    include: {
      PlayerUser: {
        include: {
          player: {
            include: {
              playerKolo: true,
            },
          },
        },
      },
    },
  });

  users.map(async (user) => {
    let poeni = 0;
    await user!.PlayerUser.map((playerUser) => {
      switch (playerUser.status) {
        case "center":
          playerUser.player.playerKolo.map((playerKolo) => {
            if (playerKolo.koloId === indexKola) {
              console.log(playerKolo.koloId, "plejerKOlo");
              const dodaj = playerKolo.ukupno * 2;
              return (poeni += dodaj);
            }
          });
          break;
        case "topLeft" || "topRight":
          playerUser.player.playerKolo.map((playerKolo) => {
            if (playerKolo.koloId === indexKola) {
              console.log(playerKolo.koloId, "plejerKOlo");
              return (poeni += playerKolo.ukupno);
            }
          });
          break;
        case "bottomLeft" || "bottomRight":
          playerUser.player.playerKolo.map((playerKolo) => {
            if (playerKolo.koloId === indexKola) {
              console.log(playerKolo.koloId, "plejerKOlo");

              return (poeni += Math.floor(playerKolo.ukupno / 2));
            }
          });
          break;
      }
      const playerKoloMap = playerUser.player.playerKolo.map((playerKolo) => {
        if (playerKolo.koloId === indexKola) {
          console.log(playerKolo.koloId, "plejerKOlo");
          return (poeni += playerKolo.ukupno);
        }
      });
      return playerKoloMap;
    });
    console.log(poeni, "poeni");

    if (poeni)
      await prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          poeni: poeni,
        },
      });
  });
  return;
}
