import Footer from "components/Footer";
import Header from "components/Header";
import Navbar from "components/Navbar";
import Seo from "components/Seo";
import styles from "styles/Layout.module.scss"

export default function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <>
      <div className={styles.wrapper}>
        <Seo />
        <Header />
        <Navbar />
        <div className={styles.container}>{children}</div>
        <Footer />
      </div>
    </>
  );
}
