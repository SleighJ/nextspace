import { useTransition, useState } from "react";
import { useRouter } from 'next/navigation';

interface Props {
  targetUserId: string;
  isFollowing: boolean;
}

const FollowClient = ({
  targetUserId,
  isFollowing,
 }: Props) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const isMutating = isPending || isFetching;

  const follow = async() => {
    setIsFetching(true);

    const res = await fetch('/api/follow', {
      method: 'POST',
      body: JSON.stringify({ targetUserId }),
      headers: {
        'Content-Type': 'application/json'
      },
    });

    setIsFetching(false);

    startTransition(() => {
      router.refresh();
    })
  }

  const unfollow = async() => {
    setIsFetching(true);

    const res = await fetch(`/api/follow?targetUserId=${targetUserId}`, {
      method: 'DELETE',
      body: JSON.stringify({ targetUserId }),
      headers: {
        'Content-Type': 'application/json'
      },
    });

    setIsFetching(false);

    startTransition(() => {
      router.refresh();
    })
  }

  return (
    <div>
      {isFollowing && (
        <button onClick={unfollow}>{ isMutating ? '...' : 'unfollow'}</button>
      )}
      {!isFollowing && (
        <button onClick={follow}>{ isMutating ? '...' : 'follow'}</button>
      )}
    </div>
  )
}