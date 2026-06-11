"use client";

import { DetailedHTMLProps, AnchorHTMLAttributes } from "react";

export function NoOpenerLink({
  children,
  ...props
}: DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
      {...props}
    >
      {children}
    </a>
  );
}
