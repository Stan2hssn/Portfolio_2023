import React from "react";
import { classNames } from "@src/components/utils/class_names";

function Container({ children, className, size = "lg" }) {
  switch (size) {
    case "sm":
      return (
        <div
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
          className={classNames("container max-w-5xl mx-auto px-8", className)}
        >
          {children}
        </div>
      );
    case "lg":
      return (
        <div
          className={classNames("container max-w-7xl mx-auto px-8", className)}
        >
          {children}
        </div>
      );
    case "xl":
      return (
        <div
          className={classNames(
            "container mx-auto px-4 sm:px-6 lg:px-8",
            className
          )}
        >
          {children}
        </div>
      );
  }
}

export default Container;
