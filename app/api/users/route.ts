import { NextResponse } from 'next/server';
import { prisma } from "@/lib/prisma";
import { auth } from '@/auth';

export const GET = async() => {
  const users = await prisma.user.findMany();
  const usersJson = NextResponse.json(users);
  return usersJson;
}

export const PUT = async(req: Request) => {
  const session = await auth();
  const currentUsersEmail = session?.user?.email!;

  const data = await req.json();
  data.age = Number(data.age);

  const user = await prisma.user.update({
    where: {
      email: currentUsersEmail,
    },
    data,
  });
  return NextResponse.json(user);
}