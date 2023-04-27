import "../styles/globals.css";
import localFont from "next/font/local";
import { classNames } from "../utils/class_names";
import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const manrope = localFont({
  src: "../public/fonts/Manrope.ttf",
  variable: "--font-sans",
});

const zighead = localFont({
  src: "../public/fonts/Zighead.otf",

  variable: "--font-title",
});

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.6,
      easing: (t) => 1 - Math.pow(1 - t, 3), // https://www.desmos.com/calculator/brs54l4xou
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <main
      data-scroll-container
      className={classNames(
        manrope.variable,
        zighead.variable,
        "font-sans flex flex-col  text-content-grey_100"
      )}
    >
      <Component {...pageProps} />
    </main>
  );
}
