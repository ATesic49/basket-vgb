import prisma from "@/lib/prisma";
import { all } from "axios";
import { cookies } from "next/headers";

export async function GET() {
  cookies().set("user", "", { maxAge: 0 });
  return Response.json("logged out");
}
