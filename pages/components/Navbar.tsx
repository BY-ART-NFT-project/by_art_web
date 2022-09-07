import { useRouter } from "next/router";
import Link from "next/link";
import css from "styled-jsx/css";

const style = css`
  .nav {
    width: 100%;
    border: 1px solid black;
  }
  .nav_btn {
    display: inline-block;
    padding: 1rem;
    position: relative;
  }
  .active {
    position: absolute;
    width: 100%;
    height: 5px;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0 auto;
    z-index: 99;
    background-color: black;
    transition: 0.5s;
  }
`;

const Navbar = () => {
  const router = useRouter();
  return (
    <>
      <nav className="nav">
        <Link href="/">
          <a className="nav_btn">
            Home {router.pathname === "/" ? <div className="active" /> : null}
          </a>
        </Link>
        <Link href="/shop">
          <a className="nav_btn">
            Shop{" "}
            {router.pathname === "/shop" ? <div className="active" /> : null}
          </a>
        </Link>
        <Link href="/login">
          <a className="nav_btn">
            Login{" "}
            {router.pathname === "/login" ? <div className="active" /> : null}
          </a>
        </Link>
      </nav>
      <style jsx>{style}</style>
    </>
  );
};

export default Navbar;
