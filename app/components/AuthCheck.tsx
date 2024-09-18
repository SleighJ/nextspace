'use client';

import { useSession } from "next-auth/react";
import { ReactNode } from "react";
import { AUTH_STATUS } from "../constants/auth.constants";

interface Props {
  children: ReactNode;
}

const AuthCheck = ({ children }: Props) => {
  const { data: session, status } = useSession();

  console.log(session, status)

  if (status === AUTH_STATUS.authenticated) {
    return <>{ children }</>
  } else {
    return <></>
  }
}

export default AuthCheck
