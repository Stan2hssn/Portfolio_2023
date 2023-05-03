import React, { useEffect } from "react";
import Header from "@organismes/Header";
import Hero from "@organismes/Hero";
import Blob from "@molecules/blob/index";
import AbsoluteBadges from "@atoms/aboslute_badges";
import Noise from "@atoms/noise";

export default function Home() {
  return (
    <>
      <Noise />
      <Header />
      <AbsoluteBadges />

      <section className="flex flex-col w-full items-center z-10">
        <Hero />
        <section
          className="flex bg-content-grey_100 w-full h-screen"
          id="Project"
        ></section>
        <section className="flex bg-red-500 w-full h-screen"></section>
        <section className="flex bg-green-500 w-full h-screen"></section>
      </section>
    </>
  );
}
