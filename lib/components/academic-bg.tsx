import TimeLineTile from "./time-line.tile";
import { AcademicInteractionDesign } from "./academic-interaction-design";
import { AcademicIndustrialDesign } from "./academic-industrial-design";

export function AcademicBg() {
  return (
    <div>
        <div className="bg-[url('/images/academic-bg-1.png')] bg-contain bg-no-repeat">
            <div>
                <div className="p-10">
                    <AcademicInteractionDesign></AcademicInteractionDesign>
                </div>
                <div className="p-10">
                    <AcademicIndustrialDesign></AcademicIndustrialDesign>
                </div>
            </div>
        </div>
    </div>
  );
}