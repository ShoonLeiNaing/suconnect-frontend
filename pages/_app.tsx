import "../styles/globals.css";
import type { AppProps } from "next/app";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
