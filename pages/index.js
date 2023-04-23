import React, { useRef, useState, useEffect } from "react";
import Header from "@organismes/Header";

export default function Home() {
  return (
    <main className="flex flex-col w-full items-center text-content-grey_100 h-[200vh]">
      <Header />
      <section className="flex flex-row w-full h-screen"></section>
      <section
        className="flex flex-row bg-content-grey_100 w-full h-screen"
        id="Project"
      ></section>
    </main>
  );
}
