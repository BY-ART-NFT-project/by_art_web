import { useRouter } from "next/router";
import Link from "next/link";
import styles from "styles/Layout.module.scss"

const Navbar = () => {
  const router = useRouter();
  return (
    <>
      <nav className={styles.nav}>
        <Link href="/">
          <a className={styles.nav_btn}>
            Home {router.pathname === "/" ? <div className={styles.active} /> : null}
          </a>
        </Link>
        <Link href="/shop">
          <a className={styles.nav_btn}>
            Shop{" "}
            {router.pathname === "/shop" ? <div className={styles.active} /> : null}
          </a>
        </Link>
        <Link href="/login">
          <a className={styles.nav_btn}>
            Login{" "}
            {router.pathname === "/login" ? <div className={styles.active} /> : null}
          </a>
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
