import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

interface Props {
  targetUserId: string;
}

const FollowButton = async({ targetUserId }: Props) => {
  const session = await auth();
  const currentUserId = await prisma.user
    .findFirst({ where: { email: session?.user?.email! }})
    .then((user) => user?.id!);

  const isFollowing = await prisma.user
    //@ts-ignore
    .findFirst({ where: { followerId: currentUserId, followingId: targetUserId }});

  return (
    <FollowClient targetUserId={targetUserId} isFollowing={!!isFollowing} />
  )
}

export default FollowButton
