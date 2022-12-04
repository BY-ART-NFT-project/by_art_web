import { useEffect, useState } from "react";
import styles from "styles/Home.module.scss";

interface Ibg {
    bgProp: string;
}

const Banner = (bgProp:Ibg) => {
    const [banner, setBanner] = useState<Ibg>()
    useEffect(()=>{
        setBanner(bgProp)
    },[bgProp])
    return (
        <div
            className={styles.banner}
            style={{
            background: `url(${banner}) left center/ cover no-repeat`,
            }}
        ></div>
    )
}

Banner.defaultProps = {
    bgProp:"default",
};

export default Banner;


