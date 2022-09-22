import "../styles/globals.css";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "react-phone-number-input/style.css";
import { appWithTranslation } from "next-i18next";
import { createTheme, ThemeProvider } from "@mui/material";

function MyApp({ Component, pageProps }: AppProps) {
  const theme = createTheme({
    typography: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <NextNProgress
        color="#3B8CF7"
        startPosition={0.5}
        stopDelayMs={200}
        height={4}
        showOnShallow
      />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
