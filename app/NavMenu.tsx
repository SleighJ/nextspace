import Link from "next/link";
import Image from "next/image";
import styles from './NavMenu.module.css';
import NextSVG from '../public/next.svg';
import { SignInButton } from "./components/buttons";

const NavMenu = () => {
  return (
    <nav className={styles.nav}>
      <Link href={'/'}>
        <Image
          src={NextSVG} // Route of the image file
          width={216}
          height={30}
          alt="NextSpace Logo"
        />
      </Link>
      <ul className={styles.links}>
        <li>
          <Link href={'/about'}>About</Link>
        </li>
        <li>
          <Link href={'/blog'}>Blog</Link>
        </li>
        <li>
          <Link href={'/users'}>Users</Link>
        </li>
        <SignInButton />
      </ul>
    </nav>
  )
};

export default NavMenu