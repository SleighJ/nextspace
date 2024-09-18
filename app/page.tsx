import styles from "./page.module.css";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const Home = async() => {
  const session = await auth();

  console.log(session)
  if (!session) {
    redirect('/api/auth/signin');
  }
  return (
    <main className={styles.main}>
      Welcome Home
    </main>
  );
}

export default Home
