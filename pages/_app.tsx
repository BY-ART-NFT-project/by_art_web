import "styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { RecoilRoot } from 'recoil';

const queryClient = new QueryClient();

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
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        {/* devtools */}
        <ReactQueryDevtools initialIsOpen={true} />
        <Component {...pageProps} />
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default MyApp;
