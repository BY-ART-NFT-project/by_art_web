import css from "styled-jsx/css";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import Seo from "./Seo";

const style = css`
  .wrapper {
    width: 100%;
    height: 100%;
    border: 1px solid black;
    background-color: white;
  }
  .container {
    width: 100%;
    height: 100vh;
    border: 1px solid black;
  }
`;

export default function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <>
      <div className="wrapper">
        <Seo />
        <Header />
        <Navbar />
        <div className="container">{children}</div>
        <Footer />
      </div>

      <style jsx>{style}</style>
    </>
  );
}
