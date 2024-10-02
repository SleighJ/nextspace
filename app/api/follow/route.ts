import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export const POST = async (req: Request) => {
  const session = await auth();
  const currentUserEmail = session?.user?.email!;
  const targetUserId = await req.json();

  const currentUserId = prisma.user
    .findUnique({ where: { email: currentUserEmail } })
    .then((user) => user?.id!);

  const record = await prisma.follows.create({
    data: {
      //@ts-ignore
      followerId: currentUserId,
      followingId: targetUserId,
    },
  });

  return NextResponse.json(record);
};

export const DELETE = async (req: NextRequest) => {
  const session = await auth();
  const currentUserEmail = session?.user?.email!;
  const targetUserId = req.nextUrl.searchParams.get('targetUserId');

  const currentUserId = prisma.user
    .findUnique({ where: { email: currentUserEmail } })
    .then((user) => user?.id!);

  const record = await prisma.follows.delete({
    where: {
      followerId_followingId: {
        //@ts-ignore
        followerId: currentUserId,
        followingId: targetUserId!
      }
    }
  })
  return NextResponse.json(record);
};