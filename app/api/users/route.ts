import { NextResponse } from 'next/server';
import { prisma } from "@/lib/prisma";

export const GET = async() => {
  const users = await prisma.user.findMany();
  const usersJson = NextResponse.json(users);
  return usersJson;
}