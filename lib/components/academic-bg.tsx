import TimeLineTile from "./time-line.tile";
import { AcademicInteractionDesign } from "./academic-interaction-design";
import { AcademicIndustrialDesign } from "./academic-industrial-design";
import { AcademicMathematicalSciences } from "./academic-mathematical-sciences";
import { FoundationalYear } from "./academic-foundation-year";
import { HighSchool } from "./academic-high-school";

export function AcademicBg() {
  return (
    <div>
        <div className="bg-[url('/images/academic-bg-1.png')] 2xl:bg-cover bg-contain bg-no-repeat">
                <div className="p-10">
                    <AcademicInteractionDesign></AcademicInteractionDesign>
                </div>
                <div className="p-10">
                    <AcademicIndustrialDesign></AcademicIndustrialDesign>
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