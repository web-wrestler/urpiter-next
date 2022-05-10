import NextNprogress from 'nextjs-progressbar';

import { useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {

  useEffect(() => {
   AOS.init({
      // offset: 120,
      // once: true,
      // disableMutationObserver: false,
      // easing:"ease-out-quad",
    });
    // AOS.refresh(true); 
    // AOS.refreshHard();
  }, []);

  return (
    <>
    <NextNprogress
      color="#ccc"
      startPosition={0.6}
      stopDelayMs={300}
      height={3}
      showOnShallow={true}
    />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
