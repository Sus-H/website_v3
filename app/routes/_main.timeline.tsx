import TimelineTile from "lib/components/timeline-tile";
import { NavButton } from "lib/components/nav-button";
import { TimelineButtons } from "lib/components/timeline-buttons";

export default function Timeline() {
    return (
        <div className="h-full">
            <TimelineButtons></TimelineButtons>
            <ol className="relative border-s border-gray-200 dark:border-gray-700">
                <TimelineTile
                    date="Jun 2024"
                    description="
                    'MasterChef' of FikIT - Fika Committee of the IT Division
                    "
                />
                <TimelineTile
                    date="Nov 2023 - Nov 2024"
                    description="
                    Treasurer of Cloudlords - maintenance of IT division premise at Lindholmen
                    "
                />
                <TimelineTile
                    date="Nov 2023"
                    description="
                    DatE-IT Host - I was responsible for hosting three companies during the job fair 
                    "
                />
                <TimelineTile
                    date="Aug 2023 - Jun 2025"
                    description="
                    MSc INTERACTION DESIGN AND TECHNOLOGIES, CHALMERS UNIVERSITY OF TECHNOLOGY
                    "
                />
                <TimelineTile
                    date="Aug 2022"
                    description="
                    Volunteer SMART - Mechanical Engineering Boards Day
                    "
                />
                <TimelineTile
                    date="Jun 2022"
                    description="
                    Small role in the Reception Video for Industrial Design :)
                    "
                />
                <TimelineTile
                    date="Jul 2021 - Jul 2022"
                    description="
                    Treasurer/Administrator of SNTD - Board of Studie Industrial Design (Studienämnden Teknisk Design)
                    "

                />
                <TimelineTile
                    date="Aug 2020 - Jun 2023"
                    description="
                    BSc INDUSTRIAL DESIGN ENGINEERING, CHALMERS UNIVERSITY OF TECHNOLOGY
                    "
                />
                <TimelineTile
                    date="Aug 2019 - Jun 2020"
                    description="
                    MATHEMATICS PROGRAMME, UNIVERSITY OF GOTHENBURG
                    "
                />
                <TimelineTile
                    date="Aug 2018 - Jun 2019"
                    description="
                    ENGINEERING PREPARATORY YEAR, CHALMERS UNIVERSITY OF TECHNOLOGY, GPA: 4.9 of 5
                    "
                />
                <TimelineTile
                    date="Aug 2015 - Jun 2018"
                    description="
                    GAME GRAPHICS, LBS LUND
                    "
                />
            </ol>
        </div>
    );
}