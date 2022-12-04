import css from "styled-jsx/css";

const style = css`
  .header {
    width: 100%;
    border: 1px solid black;
  }
`;

const Header = () => {
  return (
    <>
      <header className="header">Header</header>
      <style jsx>{style}</style>
    </>
  );
};

export default Header;
