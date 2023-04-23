import "../styles/globals.css";
import localFont from "next/font/local";
import { classNames } from "../utils/class_names";

const manrope = localFont({
  src: "../fonts/Manrope.ttf",
  variable: "--font-sans",
});

const zighead = localFont({
  src: "../fonts/Zighead.otf",

  variable: "--font-title",
});
export default function App({ Component, pageProps }) {
  return (
    <main
      className={classNames(manrope.variable, manrope.variable, "font-san")}
    >
      <Component {...pageProps} />
    </main>
  );
}
