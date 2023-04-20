import "@src/components/styles/globals.css";
import localFont from "next/font/local";
import { classNames } from "@src/components/utils/class_names";

const manrope = localFont({
  src: "./../fonts/Manrope.ttf",
  variable: "--font-manrope",
});

const zighead = localFont({
  src: "./../fonts/zighead.otf",
  variable: "--font-zighead",
});
export default function App({ Component, pageProps }) {
  return (
    <main
      className={classNames(
        "font-sans",
        manrope.variable,
        "font-title",
        zighead.variable
      )}
    >
      <Component {...pageProps} />
    </main>
  );
}
