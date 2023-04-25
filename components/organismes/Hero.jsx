import Container from "@templates/Container";
import React from "react";

export default function Hero() {
  return (
    <Container
      id="Welcome"
      size="lg"
      intern="flex flex-col col-auto h-screen py-52"
      expend="justify-center"
    >
      <section className="flex flex-col w-full items-center justify-center gap-y-16">
        <h1 className="flex text-h1 font-title text-center">
          Let’s create cool things together
        </h1>
        <p className="flex text-description_lg font-sans uppercase text-center">
          FRENCH front-end DESIGNER <br /> GOBELINS STUDENT <br /> UI / UX / 3D
          / Sound
        </p>
      </section>
    </Container>
  );
}
