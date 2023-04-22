import React, { useRef, useState, useEffect } from "react";
import Header from "@organismes/Header";

export default function Home() {
  const whiteWolf = useRef(null);
  const header = useRef(null);

  const [currentSection, setCurrentSection] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  function handleScroll() {
    const position = window.pageYOffset;
    const breakPoint = whiteWolf.current.getBoundingClientRect().bottom;
    const headerHeight = header.current.getBoundingClientRect().height;
    setScrollPosition(position);

    if (breakPoint >= position - headerHeight) {
      console.log("now");
    }

    console.log(breakPoint, position);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="flex flex-col w-full text-content-grey_100 h-[200vh]">
      <Header ref={header} />
      <section className="flex flex-row h-screen"></section>
      <section
        ref={whiteWolf}
        className="flex flex-row bg-content-grey_100 h-screen"
      ></section>
    </main>
  );
}
