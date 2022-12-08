import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "styles/Home.module.scss";

interface Ibg {
    bg:string;
}

const Banner = (bg:Ibg) => {
    return (
        <div className={styles.banner}>
            <Image
              src={`${bg.bg}`}
              alt="banner"
              width="200"
              height="200"
              unoptimized={true}
            />
        </div>
    )
}

export default Banner;


