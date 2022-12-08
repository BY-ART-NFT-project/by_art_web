import type { NextPage } from "next";
import { useEffect } from "react";
import Banner from "components/Banner";
import styles from "styles/Home.module.scss";
import Layout from "components/Layout";
import { useQuery } from "react-query";
import { fetchCollections } from "./api/api";

interface Inft {
  banner_image_url: string;
  created_date: string;
  description: string;
  featured_image_url: string;
  image_url: string;
}

const Home: NextPage = () => {
  const { isLoading, data }= useQuery("collection", fetchCollections, 
  {
    refetchOnWindowFocus: false,
    retry: 1,
    onSuccess: data => {
      console.log(data)
    },
    onError: e => {
      console.log(e,"실패");
    },
    select: (data) => data.collection
    }
  );
  useEffect(()=>{
    console.log(isLoading)
    console.log(data)
  },[data])

  return (

    <Layout>
      
      {isLoading ? null : 
      <>
        <Banner bg={data?.large_image_url}/>
        <div>
          {data?.description}
        </div>
        <div>
          {data?.description}
        </div>
      </>
      }
      
      
    </Layout>
  )
}

export default Home;
