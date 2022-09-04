import css from "styled-jsx/css";

const style = css`
  .nav {
    width: 100%;
    border: 1px solid black;
  }
`;

const Navbar = () => {
  return (
    <>
      <nav className="nav">Nav</nav>
      <style jsx>{style}</style>
    </>
  );
};

export default Navbar;
