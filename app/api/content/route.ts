const posts = [
  {
    title: 'Lorem Ipsum',
    slug: 'lorem-ipsum',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
  },
];

import NextAuth from "next-auth"
// import { PrismaAdapter } from "@auth/prisma-adapter"
// import { PrismaClient } from "@prisma/client"
// import authConfig from "./auth.config"

// const prisma = new PrismaClient()


import { NextResponse } from "next/server";
import { auth } from "@/auth";

export const GET = async() => {
  const session = await auth();

  console.log(session)
  if (!session) {
    // redirect or render something else
  }

  return NextResponse.json(posts);
};
