import css from "styled-jsx/css";

const style = css`
  .footer {
    width: 100%;
    border: 1px solid black;
  }
`;

const Footer = () => {
  return (
    <>
      <header className="footer">Footer</header>
      <style jsx>{style}</style>
    </>
  );
};

export default Footer;
