import { getServerSession } from "next-auth"
import { NEXT_AUTH } from "../lib/auth";

async function getUser() {
  const session = await getServerSession(NEXT_AUTH);
  return session;
}

export default async function Home() {
  const session = await getUser();

  return (
    <div>
      {JSON.stringify(session)}
    </div>
  );
}