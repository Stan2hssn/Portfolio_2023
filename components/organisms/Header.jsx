import React from "react";
import Logo from "@atoms/Logo";
import Container from "../templates/container";
import { classNames } from "@src/components/utils/class_names";

export default function Header() {
  return (
    <Container
      size="lg"
      className="flex flex-row w-full justify-between items-center py-8 relative z-10"
    >
      <Logo />
      <div className="flex flex-row font-sans gap-16">
        <p className="flex font-bold">Project</p>
        <p className="flex font-bold">Me</p>
      </div>
    </Container>
  );
}
