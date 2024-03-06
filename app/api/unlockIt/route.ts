import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  await prisma.isLocked.update({
    where: {
      id: 1,
    },
    data: {
      isLocked: true,
    },
  });
}
