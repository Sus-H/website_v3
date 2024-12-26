import { Head2 } from "lib/components/header-2";
import { SideScrollingBanner } from "lib/components/side-scrolling-banner";
import { Introduction } from "lib/components/introduction";
import { AcademicBg } from "lib/components/academic-bg";
import { Portfolio } from "lib/components/portfolio";

export default function Index() {
  return (
    <div>
      <div className="grid justify-centerz-10">
        <Introduction></Introduction>
        <SideScrollingBanner></SideScrollingBanner>
        <div className="bg-[url('/images/pink-clouds-bg-15.png')] bg-cover bg-center w-screen">
          <div className="py-20">
            <Head2>Portfolio</Head2>
          </div>
          <Portfolio></Portfolio>
        </div>
        <div className="py-20">
          <Head2>Academic Journey</Head2>
          <div className="p-20 bg-[url('/images/bg-vector-1.png')] 2xl:bg-cover bg-contain">
            <AcademicBg></AcademicBg>
          </div>
        </div>
        <div>
          <Head2>Gallery</Head2>
        </div>
      </div>
    </div>
  );
}
