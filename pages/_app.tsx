import NextNprogress from 'nextjs-progressbar';
import { PopupContext } from '../popupsContext';
// import { useEffect } from "react";

import '../styles/globals.scss'

export default function MyApp({ Component, pageProps }) {


  return (
    <>
    <NextNprogress
      color="#F2A446"
      startPosition={0.6}
      stopDelayMs={300}
      height={5}
      showOnShallow={true}
    />
      <PopupContext>
        <Component {...pageProps} />
      </PopupContext>
    </>
  )
}
