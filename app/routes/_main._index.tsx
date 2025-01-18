import { Head2 } from "lib/components/header-2";
import { SideScrollingBanner } from "lib/components/side-scrolling-banner";
import { Introduction } from "lib/components/introduction";
import { AcademicBg } from "lib/components/academic-bg";
import { Portfolio } from "lib/components/portfolio";
import { ScrollToTopButton } from "lib/components/scroll-to-top-button";

export default function Index() {
  return (
    <div>
      <div className="grid justify-center z-10">
        <Introduction></Introduction>
        <SideScrollingBanner></SideScrollingBanner>
        <div id="portfolio" className="bg-[url('/images/pink-clouds-bg-15.png')] bg-cover w-screen py-20">
          <Head2>Portfolio</Head2>
          <div className="p-5 sm:p-10 lg:p-20">
            <Portfolio></Portfolio>
          </div>
        </div>
        <div id="academic-journey" className="py-20">
          <div className="flex justify-center">
            <Head2>Academic Journey</Head2>
          </div>
          <div className="p-5 sm:p-10 lg:p-20 bg-[url('/images/bg-vector-1.png')] bg-cover">
            <AcademicBg></AcademicBg>
          </div>
        </div>
        <div id="gallery" className="py-20">
          <Head2>Gallery</Head2>
        </div>
      </div>
      <ScrollToTopButton />
    </div>
  );
}
