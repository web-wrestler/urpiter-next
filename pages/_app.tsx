import NextNprogress from 'nextjs-progressbar';

// import { useEffect } from "react";
// import AOS from "aos";

// import "aos/dist/aos.css";
import '../styles/globals.scss'

export default function MyApp({ Component, pageProps }) {

  // useEffect(() => {
  //  AOS.init({
  //     // offset: 120,
  //     // once: true,
  //     // disableMutationObserver: false,
  //     // easing:"ease-out-quad",
  //   });
  //   // AOS.refresh(true); 
  //   // AOS.refreshHard();
  // }, []);

  return (
    <>
    <NextNprogress
      color="yellow"
      startPosition={0.6}
      stopDelayMs={300}
      height={5}
      showOnShallow={true}
    />
      <Component {...pageProps} />
    </>
  )
}
