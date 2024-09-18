import { prisma } from "@/lib/prisma";
import UserCard from "../components/UserCard";

export const Users = async() => {
  const users = await prisma.user.findMany();
  return (
    <div>
      { users.map((user, i) => {
        const userKey = `${i}-${user.id}-${user.name}`;
        return <UserCard key={userKey} {...user} />
      }) }
    </div>
  )
};

export default Users
