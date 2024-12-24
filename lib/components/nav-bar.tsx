import { NavButton } from "./nav-button";
import { NavScrollButton } from "./nav-scroll-button";

export function NavBar() {
  return <div>
    <div className="bg-[url('/images/pink-clouds-bg-40.png')] bg-cover bg-center sticky top-0 z-10 py-5 font-bold w-screen h-28 content-center">
      <div className="flex text-white gap-20 justify-center">
          <div>
          <NavButton to="/"><img src="/images/kirbypixelstar_trans2.png" alt="" className="w-7 inline"/></NavButton>
          <NavButton to="/">Home</NavButton>
          </div>
          <NavScrollButton to="/" target="">Portfolio</NavScrollButton>
          <NavScrollButton to="/" target="">Academic Journey</NavScrollButton>
          <NavScrollButton to="/" target="">Gallery</NavScrollButton>
      </div>
    </div>
  </div>      
}