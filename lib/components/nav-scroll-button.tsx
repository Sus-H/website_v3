import React from "react";
import { Link as ScrollLink } from "react-scroll";

interface Props {
  to: string;
  target?: string;
  children?: React.ReactNode;
}

export function NavScrollButton({ to, target, children }: Props) {
  return (
    <ScrollLink
      className="text no-underline hover:underline"
      to={to}
      smooth={true}
      duration={500}
      target={target}
    >
      {children}
    </ScrollLink>
  );
}