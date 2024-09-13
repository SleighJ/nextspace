const posts = [
  {
    title: 'Lorem Ipsum',
    slug: 'lorem-ipsum',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
  },
];

import { NextResponse } from "next/server";

export const GET = async() => {
  return NextResponse.json(posts);
};
