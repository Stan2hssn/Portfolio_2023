import Heading from "@atoms/Heading";
import Container from "@templates/Container";
import Blob from "@molecules/blob";
import React from "react";

export default function Hero() {
  return (
    <section className="flex w-full h-auto">
      <Blob />
      <Container
        id="Welcome"
        size="lg"
        expend="justify-center"
        intern="flex flex-col col-auto  min-h-screen h-auto py-44 z-0"
      >
        <section className="flex flex-col w-full items-start sm:items-center gap-y-6 sm:gap-y-16 ">
          <Heading as="h1" size="h1" className="flex sm:text-center text-left">
            Let’s create cool things together
          </Heading>
          <Heading
            as="p"
            size="description_lg"
            className="flex font-sans uppercase text-left sm:text-center"
          >
            FRENCH front-end DESIGNER <br /> GOBELINS STUDENT <br /> UI / UX /
            3D / Sound
          </Heading>
        </section>
      </Container>
    </section>
  );
}
