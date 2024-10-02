import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { ProfileForm } from "./ProfileForm";

const Dashboard = async() => {
  const session = await auth();

  if (!session) redirect('api/auth/signin');

  const currentUserEmail = session?.user?.email!;
  const user = prisma.user.findUnique({
    where: {
      email: currentUserEmail,
    }
  });

  return (
    <>
      <h1>
        dashboard
      </h1>
      <ProfileForm user={user} />
    </>
  );
};

export default Dashboard
