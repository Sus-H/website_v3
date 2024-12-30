import TimeLineTile from "./time-line.tile";
import { AcademicInteractionDesign } from "./academic-interaction-design";
import { AcademicIndustrialDesign } from "./academic-industrial-design";
import { AcademicMathematicalSciences } from "./academic-mathematical-sciences";
import { FoundationalYear } from "./academic-foundation-year";
import { HighSchool } from "./academic-high-school";

export function AcademicBg() {
  return (
    <div>
        <div className="flex relative rounded-lg overflow-hidden bg-white">

            <div className="absolute top-0 left-0 w-full h-1/2 border-t-4 border-blue-500"></div>
            <div className="absolute bottom-0 left-0 w-full h-1/2 border-b-4 border-red-500"></div>
            <div className="absolute top-0 left-0 h-full w-1/4 border-l-4 border-blue-500"></div>
            <div className="absolute top-0 right-0 h-full w-1/4 border-r-4 border-red-500"></div>
            
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
        <div>
            <div className="p-10">
            <AcademicMathematicalSciences></AcademicMathematicalSciences>
            </div>
            <div className="p-10">
            <FoundationalYear></FoundationalYear>
            </div>
            <div className="p-10">
            <HighSchool></HighSchool>
            </div>
        </div>
    </div>
  );
}