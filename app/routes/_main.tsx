import type { MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

import { NavBar } from "lib/components/nav-bar";
import { Welcome } from "lib/components/welcome";

export const meta: MetaFunction = () => {
  return [
    { title: "Susanne" },
    { name: "description", content: "Welcome to my portfolio!" },
  ];
};

export default function Main() {
  return (
    <div className="flex flex-wrap items-center justify-center font-inter">
      <NavBar></NavBar>
      <Welcome></Welcome>

      <Outlet></Outlet>

      <footer>
        <p className="text-center text-xs mt-5">
          {" "}
          © Susanne On Huang {":)"} 2025
        </p>
      </footer>
    </div>
  );
}
