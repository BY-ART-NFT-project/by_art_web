import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Banner from "components/Banner";
import styles from "styles/Home.module.scss";
import Layout from "components/Layout";

interface Inft {
  banner_image_url: string;
  created_date: string;
  description: string;
  featured_image_url: string;
  image_url: string;
}

const COLLECTION_SLUG = "by-art";

const Home: NextPage = () => {
  const [items, setItems] = useState<Inft|undefined>();
  const [banner,setBanner] = useState<string>()
  //api 호출
  useEffect(() => {
    (async () => {
      const { collection } = await (
        await fetch(
          `https://api.opensea.io/api/v1/collection/${COLLECTION_SLUG}`
        )
      ).json()
      setItems(collection);
      console.log(items)
    })();
  }, []);

  useEffect(()=>{
    setBanner(items?.banner_image_url)
  },[items])

  return (
    <Layout>
      <Banner bgProp={banner}/>
    </Layout>
  )
}

export default Home;
