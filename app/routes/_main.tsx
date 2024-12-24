import type { MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { NavButton } from "lib/components/nav-button";
import { BsStars } from "react-icons/bs";
import { DropDownMenu } from "lib/components/dropdown";
export const meta: MetaFunction = () => {
  return [
    { title: "Susanne" },
    { name: "description", content: "Welcome to Remix (SPA Mode)!" },
  ];
};

export default function Main() {
  return (
    <div className="flex flex-wrap items-center justify-center bg-zinc-800 text-gray-200 font-mono">
      <div className="bg-pink-800 sticky top-0 z-10 py-5 font-bold w-screen">
        <div className=" text-white gap-5 flex justify-center">
          <div>
            <NavButton to="/"><img src="/images/kirbypixelstar_trans2.png" alt="" className="w-7"/></NavButton>
          </div>
          {/* <DropDownMenu></DropDownMenu> */}
          <NavButton to="/">Home</NavButton>
          <NavButton to="/projects">Projects</NavButton>
          <NavButton to="/timeline">Timeline</NavButton>
          <NavButton to="/mealPrep">My Meal Preps</NavButton>
        </div>
      </div>
      <div className="max-w-4xl">
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
          <p className="text-center text-xs"> © Meep {":)"} 2024</p>
        </footer>
      </div>
    </div>
  );
}