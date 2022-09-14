import type { NextPage } from "next";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import css from "styled-jsx/css";

const style = css`
  /* .banner {
    width: 100%;
    border: 1px solid black;
    height: 400px;
  } */
`;

interface Inft {
  banner_image_url: string;
  created_date: string;
  description: string;
  featured_image_url: string;
  image_url: string;
}

const COLLECTION_SLUG = "by-art";

const Home: NextPage = () => {
  const [items, setItems] = useState<Inft>();
  //api 호출
  useEffect(() => {
    (async () => {
      const { collection } = await (
        await fetch(
          `https://api.opensea.io/api/v1/collection/${COLLECTION_SLUG}`
        )
      ).json();
      setItems(collection);
      console.log(items?.banner_image_url);
    })();
  }, []);

  return (
    <>
      <div>Home</div>
      <div
        style={{
          width: "100%",
          border: "1px solid black",
          height: "400px",
          backgroundImage: items?.banner_image_url,
        }}
      ></div>
      <style jsx>{style}</style>
    </>
  );
};

export default Home;
