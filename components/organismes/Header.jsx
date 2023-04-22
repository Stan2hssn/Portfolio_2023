import React, { forwardRef } from "react";
import { classNames } from "@utils/class_names";
import Logo from "@atoms/Logo";
import Container from "@templates/Container";

const Header = forwardRef((props, ref) => {
  const { theme } = props;

  return (
    <Container
      ref={ref}
      size="lg"
      className={classNames(
        theme,
        "fixed flex flex-row w-full justify-between items-center py-4 mix-blend-difference z-10"
      )}
    >
      <Logo />
      <div className="flex flex-row font-sans text-nav gap-16">
        <p className="flex font-bold">Project</p>
        <p className="flex font-bold">Me</p>
      </div>
    </Container>
  );
});

export default Header;
