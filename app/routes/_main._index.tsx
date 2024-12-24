import { Head2 } from "lib/components/header-2";
import { SideScrollingBanner } from "lib/components/side-scrolling-banner";

export default function Index() {
  return (
    <div className="grid justify-center">
      <img
        src="/images/project_images/coat_kirby_1.jpg"
        alt=""
        className="fixed top-44 left-0 transform w-96"
      />
        <SideScrollingBanner></SideScrollingBanner>
        <div className="bg-[url('/images/pink-clouds-bg-15.png')] bg-cover bg-center w-screen">
          <Head2>Portfolio</Head2>
        </div>
        <div>
          <Head2>Academic Journey</Head2>
        </div>
        <div>
          <Head2>Gallery</Head2>
        </div>
    </div>
  );
}
