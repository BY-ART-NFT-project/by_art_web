import "styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const resizeHandler = () => {
      document.documentElement.style.setProperty('--vw', window.innerHeight * 0.01 + 'px');
      document.documentElement.style.setProperty('--vh', window.innerHeight * 0.01 + 'px');
      document.documentElement.style.setProperty('--app-height', window.innerHeight + 'px');
    }
    window.addEventListener('resize', ()=>{
      setTimeout(() => {
        resizeHandler()
      }, 500);
    });
    resizeHandler();
    return () => {
      window.removeEventListener('resize', ()=>{
        setTimeout(() => {
          resizeHandler()
        }, 500);
      });
    }

  },[])
  

  return (
      <Component {...pageProps} />
  );
}

export default MyApp;
