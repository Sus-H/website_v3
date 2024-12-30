import TimeLineTile from "./time-line.tile";
import { AcademicInteractionDesign } from "./academic-interaction-design";
import { AcademicIndustrialDesign } from "./academic-industrial-design";
import { AcademicMathematicalSciences } from "./academic-mathematical-sciences";
import { FoundationalYear } from "./academic-foundation-year";
import { HighSchool } from "./academic-high-school";

export function AcademicBg() {
  return (<div>
        <div className="grid gap-20">
            <div className="flex relative rounded-lg overflow-hidden bg-white">

                <div className="absolute top-0 left-0 w-full h-1/2 border-t-4 border-teal-500"></div>
                <div className="absolute bottom-0 left-0 w-full h-1/2 border-b-4 border-pink-900"></div>

                <div className="absolute top-0 left-0 h-2/5 w-1/4 border-l-4 border-teal-500"></div>
                <div className="absolute bottom-0 left-0 h-3/5 w-1/4 border-l-4 border-pink-900"></div>

                <div className="absolute top-0 right-0 h-2/5 w-1/4 border-r-4 border-teal-500"></div>
                <div className="absolute bottom-0 right-0 h-3/5 w-1/4 border-r-4 border-pink-900"></div>
                
                <div className="flex justify-center items-center h-full w-full absolute inset-0">
                    <img
                    src="/images/logo_chalmers.png"
                    alt="Centered Image"
                    className="max-w-full max-h-full object-contain opacity-10"
                    />
                </div>
                <div className=" py-20 z-10">
                    <div className="px-20">
                        <AcademicInteractionDesign></AcademicInteractionDesign>
                    </div>
                    <hr className="flex justify-start w- m-10"/>
                    <div className="px-20">
                        <AcademicIndustrialDesign></AcademicIndustrialDesign>
                    </div>
                </div>

            </div>
            <div className="grid sm:grid-cols-2 gap-20">
            <FoundationalYear></FoundationalYear>
            <AcademicMathematicalSciences></AcademicMathematicalSciences>
            </div>
            <div className="">
            <HighSchool></HighSchool>
            </div>
        </div>
    </div>
  );
}