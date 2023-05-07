import Container from "@templates/Container";
import Image from "next/image";
import React, { useRef, useEffect, forwardRef } from "react";

const ParallaxImage = forwardRef(({ ...props }, ref) => (
  <Image
    ref={ref}
    className="min-w-[150%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 will-change-transform"
    src="https://images.unsplash.com/photo-1539639087565-41c59f40f3d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
    alt="Picture of the author"
    width={500}
    height={500}
    style={{
      transformStyle: "preserve-3d",
    }}
    {...props}
  />
));

export default function ProjectSection() {
  const parallaxContainer = useRef(null);
  const parallaxContent = useRef(null);

  function handleHover(e) {
    const parallaxContainerElement = parallaxContainer.current;
    const parallaxContentElement = parallaxContent.current;

    if (!parallaxContainerElement || !parallaxContentElement) {
      return;
    }

    const elementWidth = parallaxContentElement.offsetWidth;
    const influence = 16;
    const x = e.clientX / window.innerWidth - 0.5;
    const mouseX = x * influence;
    const constraint = elementWidth / 2;
    const translateX = mouseX * 3 - constraint;

    parallaxContainerElement.style.transform = `perspective(${elementWidth}px) rotateY(${mouseX}deg)`;
    parallaxContentElement.style.transform = `translate3d(${translateX}px, -50%, 0)`;

    console.log(mouseX, mouseX * 3);
  }

  useEffect(() => {
    const parallaxContainerElement = parallaxContainer.current;
    const parallaxContentElement = parallaxContent.current;

    if (!parallaxContainerElement || !parallaxContentElement) {
      return;
    }

    window.addEventListener("mousemove", handleHover);

    return () => {
      window.removeEventListener("mousemove", handleHover);
    };
  }, []);

  return (
    <Container
      id="Project"
      size="lg"
      intern="flex flex-col items-center w-full h-screen md:min-h-screen md:h-auto md:py-44 "
      expend="justify-center bg-content-grey_100"
    >
      <div
        ref={parallaxContainer}
        className="relative flex justify-center items-center w-2/3 aspect-video transform-gpu overflow-hidden"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <ParallaxImage ref={parallaxContent} />
      </div>
    </Container>
  );
}
