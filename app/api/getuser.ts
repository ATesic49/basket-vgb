import prisma from "@/lib/prisma";
import { cookies } from "next/headers";
import { User } from "../types";

export const getUserById = async (id: number | null) => {
  if (!id) {
    return null;
  }
  try {
    const user = (await prisma.user.findUnique({
      where: {
        id: id,
      },
      include: {
        PlayerUser: {
          include: {
            player: true,
          },
        },
        trener: true,
      },
    })) as object as User;
    return user;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const getUserCookie = () => {
  if (cookies().has("user")) {
    return Number(cookies().get("user")?.value);
  } else {
    return null;
  }
};

export const getLocked = async () => {
  const a = await prisma.isLocked.findFirst({
    where: {
      id: 1,
    },
  });
  return a?.isLocked;
};
