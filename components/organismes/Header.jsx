import React, { forwardRef } from "react";
import { classNames } from "@utils/class_names";
import Logo from "@atoms/Logo";
import Container from "@templates/Container";
import Nav_items from "@atoms/Nav_item";
import Link from "next/link";

export default function Header() {
  return (
    <section className="fixed flex justify-center w-screen bg-content-grey_900/[.01] backdrop-blur-md z-999 mix-blend-difference">
      <Container
        size="lg"
        className={"flex flex-row w-screen justify-between items-center py-8"}
      >
        <Link href="">
          <Logo />
        </Link>
        <div className="flex flex-row gap-16">
          <Nav_items name={"Project"} link="#Project" />
          <Nav_items name={"About me"} />
        </div>
      </Container>
    </section>
  );
}
