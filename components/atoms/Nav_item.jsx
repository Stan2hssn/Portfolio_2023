import { classNames } from "@utils/class_names";
import Link from "next/link";
import React from "react";

export default function Nav_items({ ...props }) {
  return (
    <Link
      href={classNames(props.link)}
      scroll={true}
      className="flex h-[1.3rem] items-center group"
    >
      <span className="h-[.9rem] overflow-hidden">
        <div
          className="
      flex flex-col col-auto font-sans text-nav uppercase select-none group-hover:-translate-y-[.9rem] transition-transform duration-300 ease-in-out"
        >
          <span className="flex group-hover:rotate-[20deg] origin-right transition-transform duration-300 ease-in-out">
            {props.name}
          </span>
          <span className="flex rotate-[20deg] group-hover:rotate-0 origin-top-left transition-transform duration-300 ease-in-out">
            {props.name}
          </span>
        </div>
      </span>
    </Link>
  );
}
