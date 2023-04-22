import React, { forwardRef } from "react";
import { classNames } from "@utils/class_names";

const Container = forwardRef((props, ref) => {
  const { children, className, size = "lg" } = props;

  switch (size) {
    case "sm":
      return (
        <div
          ref={ref}
          className={classNames(
            "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            className
          )}
        >
          {children}
        </div>
      );
    case "md":
      return (
        <div
          ref={ref}
          className={classNames("container max-w-5xl mx-auto px-8", className)}
        >
          {children}
        </div>
      );
    case "lg":
      return (
        <div
          ref={ref}
          className={classNames("container max-w-7xl mx-auto px-8", className)}
        >
          {children}
        </div>
      );
    case "xl":
      return (
        <div
          ref={ref}
          className={classNames(
            "container mx-auto px-4 sm:px-6 lg:px-8",
            className
          )}
        >
          {children}
        </div>
      );
  }
});

export default Container;
