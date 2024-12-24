import React from "react";

interface Head2Props {
  children?: React.ReactNode;
}

export function Head2({ children }: Head2Props) {
  return <p className="grid justify-center font-lobster text-6xl text-pink-500">{children}</p>;
}