'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import { AUTH_STATUS } from '../constants/auth.constants';
import Link from 'next/link';
import Image from 'next/image';
import styles from './buttons.module.css';

export const SignInButton = () => {
  const { data: session, status } = useSession();
  const image = session?.user?.image || '/mememan.webp';

  return (
    <div className={styles.auth_button_container}>
    { status === AUTH_STATUS.authenticated && (
      <Link href={'/dashboard'}>
        <div className={styles.auth_img_wrapper}>
          <Image
            src={image}
            height={32}
            width={32}
            alt='your name'
          />
        </div>
      </Link>
    )}
    { status === AUTH_STATUS.loading && (
      <>...</>
    )}
    { status === AUTH_STATUS.unauthenticated && (
      <button onClick={()=>signIn()}>...</button>
    )}
    </div>
  )
};

export const SignOutButton = () => {
  return (
    <button onClick={() => signOut()}>Sign Out</button>
  )
};