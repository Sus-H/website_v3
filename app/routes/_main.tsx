import type { MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { BsStars } from "react-icons/bs";
import { NavBar } from "lib/components/nav-bar";




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
      <div className="max-w-full">
        <div className="mx-5">
          <div className="mt-5 text-base font-bold flex justify-center gap-2">
            <div><BsStars className="inline"/></div><p>Welcome to My Organized Chaos!</p><div><BsStars className="inline"/></div>
          </div>
          <div className=" mb-3 text-base font-bold flex justify-center">
              Site is under construction, pardon the mess {":)"}
          </div>
          <Outlet></Outlet>
        </div>
        <footer>
          <p className="text-center text-xs"> © Susanne On Huang {":)"} 2024</p>
        </footer>
      </div>
    </div>
  );
}