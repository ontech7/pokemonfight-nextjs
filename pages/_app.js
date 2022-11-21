import "../styles/globals.css";

import { Inter } from "@next/font/google";
import { PlayerProvider } from "../context/player";

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }) {
  return (
    <PlayerProvider>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </PlayerProvider>
  );
}

export default MyApp;
