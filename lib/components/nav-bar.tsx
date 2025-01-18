import { NavButton } from "./nav-button";
import { NavScrollButton } from "./nav-scroll-button";
import { Portfolio } from "./portfolio";

export function NavBar() {
  return <div>
    <div className="bg-[url('/images/pink-clouds-bg-40.png')] bg-cover bg-center sticky top-0 z-10 py-5 font-bold w-screen h-28 content-center">
      <div className="grid grid-cols-4 items-center mx-5 sm:flex text-white gap-20 sm:justify-center">
          <div className="flex">
          <NavButton to="/"><img src="/images/kirbypixelstar_trans2.png" alt="" className="w-7"/></NavButton>
          <NavButton to="/">Home</NavButton>
          </div>
          <NavScrollButton targetId="portfolio" label="Portfolio" />
          <NavScrollButton targetId="academic-journey" label="Academic Journey" />
          <NavScrollButton targetId="gallery" label="Gallery" />
      </div>
    </div>
  </div>      
}