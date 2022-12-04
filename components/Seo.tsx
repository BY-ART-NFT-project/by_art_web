import { NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";

const Seo: NextPage = () => {
  //router 선언
  const router = useRouter();
  return (
    <Head>
      <title>
        {router.pathname === "/"
          ? "HOME"
          : router.pathname.substr(1).toUpperCase()}{" "}
        | BY_ART
      </title>
    </Head>
  );
};

export default Seo;
