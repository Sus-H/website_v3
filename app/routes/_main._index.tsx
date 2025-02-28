import { Head2 } from "lib/components/header-2";
import { SideScrollingBanner } from "lib/components/side-scrolling-banner";
import { Introduction } from "lib/components/introduction";
import { AcademicBg } from "lib/components/academic-bg";
import { Portfolio } from "lib/components/portfolio";
import { Gallery } from "lib/components/gallery";
import { ScrollToTopButton } from "lib/components/scroll-to-top-button";

export default function Index() {
  return (
    <div>
      <div className="grid justify-center z-10 gap-20">
        <Introduction></Introduction>
        <SideScrollingBanner></SideScrollingBanner>
        <div id="portfolio" className="bg-[url('/images/pink-clouds-bg-15.png')] bg-cover w-screen">
          <Head2>Portfolio</Head2>
          <div className="p-5 sm:p-10 lg:p-20">
            <Portfolio></Portfolio>
          </div>
        </div>
        <div id="academic-journey">
          <div className="flex justify-center">
            <Head2>Academic Journey</Head2>
          </div>
          <div className="p-5 sm:p-10 lg:p-20 bg-[url('/images/bg-vector-1.png')] bg-cover">
            <AcademicBg></AcademicBg>
          </div>
        </div>
        <div id="gallery">
          <Head2>Gallery</Head2>
          <div>
            <Gallery></Gallery>
          </div>
        </div>
      </div>
      <ScrollToTopButton />
    </div>
  );
}