import TimeLineTile from "./time-line.tile";

export function CurriculumVitae() {
  return (
    <div>
      <ol className="relative border-s border-black dark:black">
        <TimeLineTile date="APR 2025 - APR 2026">
          <li>Web Developer - DigIT - Chalmers</li>
        </TimeLineTile>
        <TimeLineTile date="JUN 2025 - AUG 2025">
          <li>System Developer - Chalmers</li>
        </TimeLineTile>
        <TimeLineTile date="MAY 2024 - MAY 2025">
          <li>MasterChef - FikIT - Chalmers</li>
        </TimeLineTile>
        <TimeLineTile date="OCT 2023 - NOV 2024">
          <li>Treasurer - Cloudlords (Rustmästeri) - Chalmers</li>
        </TimeLineTile>
        <TimeLineTile date="NOV 2023 & NOV 2024">
          <li>Company Host - DateIT - Chalmers</li>
        </TimeLineTile>
        <TimeLineTile date="SEP 2023 - JUN 2024">
          <li>Member - Lindholmens Makerspace - Chalmers</li>
        </TimeLineTile>
        <TimeLineTile date="SEP 2022 - JUN 2023">
          <li>Member - Chalmers Robotförening - Chalmers</li>
        </TimeLineTile>
        <TimeLineTile date="JUN 2022 - FEB 2023">
          <li>Zumba Fitness Instructor - Fitness24Seven</li>
        </TimeLineTile>
        <TimeLineTile date="OCT 2020 - DEC 2022">
          <li>Tutor - StudyBuddy</li>
        </TimeLineTile>
        <TimeLineTile date="JUN 2021 - JUN 2022">
          <li>Administrator and Treasurer - SNTD - Chalmers</li>
        </TimeLineTile>
        <TimeLineTile date="JUN 2018 - AUG 2018">
          <li>Ice Cream Vendor - Tosselilla Sommar</li>
        </TimeLineTile>
        <TimeLineTile date="JUN 2017 - AUG 2017">
          <li>Teaching Assistant - Malenagymnasiet</li>
        </TimeLineTile>
      </ol>
    </div>
  );
}
