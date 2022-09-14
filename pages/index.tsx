import type { NextPage } from "next";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { getNFT } from "./api/api";

const Home: NextPage = () => {
  const [items, setItems] = useState();
  //api 호출
  useEffect(() => {
    getNFT().then((response) => {
      setItems(response);
      console.log(items);
    });
  }, []);
  return (
    <>
      <div>Home</div>
    </>
  );
};

export default Home;
