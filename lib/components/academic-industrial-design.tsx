import TimeLineTile from "./time-line.tile";

export function AcademicIndustrialDesign() {
    return (
        <div className="grid sm:grid-cols-3">
            <div>
                <ol className="relative border-s border-black dark:black">
                    <TimeLineTile date="HT 2020">
                            <ol>
                                <li>Sketching and Modeling techniques - MPP057</li>
                                <li>Engineering methodology - MPP083</li>
                            </ol>
                    </TimeLineTile>
                    <TimeLineTile date="VT 2021">
                            <ol>
                                <li>Computer aided modeling - MPP067</li>
                                <li>Mathematical Statistics - MVE635</li>
                                <li>Basic Form Design - MPP121</li>
                                <li>General Music Theory - 5MU047 {"(Uppsala University, Remote)"}</li>
                            </ol>
                    </TimeLineTile>
                </ol>
                <div className="grid grid-cols-2 mt-10">
                    <img src="/images/td-logga.png" alt="" className="h-44"/>
                    <p className="grid gap-5">
                        <p>Industrial Design Engineering</p>
                        <p>(Teknisk Design)</p>
                        <p>TKDES</p>
                    </p>
                </div>
            </div>
            <div>
                <ol className="relative border-s border-black dark:black">
                    <TimeLineTile date="HT 2021">
                            <ol>
                                <li>Sketching and Presentation Techniques - PPU221</li>
                                <li>Mechanics - TME010</li>
                                <li>Product requirements engineering - MMT016</li>
                                <li>Product Semiotics - MPP071</li>
                                <li>Design Ergonomics - MMT010</li>
                            </ol>
                    </TimeLineTile>
                    <TimeLineTile date="VT 2022">
                        <ol>
                            <li>Materials Science and Engineering - MTT011</li>
                            <li>Applied Mechatronics - SSY300</li>
                            <li>User Oriented Design - MMF274</li>
                            <li>Simulation based Strength of materials - MHA064</li>
                        </ol>
                    </TimeLineTile>
                </ol>
            </div>
            <ol className="relative border-s border-black dark:black">
                <TimeLineTile date="HT 2022">
                    <ol>
                        <li>Usability Engineering - IMS050</li>
                        <li>Manufacturing Engineering - MTT031</li>
                        <li>Machine Elements - MMF294</li>
                        <li>Sustainable Development - PPU065</li>
                    </ol>
                </TimeLineTile>
                <TimeLineTile date="VT 2023" title="BSc INDUSTRIAL DESIGN ENGINEERING, CHALMERS UNIVERSITY OF TECHNOLOGY">
                    <ol>
                        <li>Bachelor's Thesis in Industrial and Materials Science - IMSX16</li>
                        <li>Introduction to Artificial Intelligence - MMS131</li>
                        <li>Applied Object Oriented Programming - EEN060</li>
                    </ol>
                </TimeLineTile>
                <TimeLineTile date="SUMMER 2023">
                    Summer Course in Music Note Writing - MUHG47 {"(Lund University, Remote)"}
                </TimeLineTile>
            </ol>
        </div>
    );
}