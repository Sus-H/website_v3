import { Head2 } from "lib/components/header-2";
import { SideScrollingBanner } from "lib/components/side-scrolling-banner";
import { Introduction } from "lib/components/introduction";
import { AcademicBg } from "lib/components/academic-bg";

export default function Index() {
  return (
    <div className="">
      <div className="grid justify-centerz-10">
        <Introduction></Introduction>
        <SideScrollingBanner></SideScrollingBanner>
        <div className="bg-[url('/images/pink-clouds-bg-15.png')] bg-cover bg-center w-screen">
          <Head2>Portfolio</Head2>
        </div>
        <div className="py-20">
          <Head2>Academic Journey</Head2>
          <div className="p-20">
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
