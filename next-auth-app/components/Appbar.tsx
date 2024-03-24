"use client";
import { signIn, signOut } from "next-auth/react"
import { useSession } from "next-auth/react";

export const Appbar = () => {
  const session = useSession();
    return <div>
    <button onClick={() => signIn()}>Signin</button>
    <button onClick={() => signOut()}>Sign out</button>
    <div>
      {JSON.stringify(session.data)}
    </div>

  </div>
}