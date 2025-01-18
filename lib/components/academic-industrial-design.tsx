import TimeLineTile from "./time-line.tile";

export function AcademicIndustrialDesign() {
    return (
        <div>
            <div className="lg:flex place-content-start gap-5 mb-10">
                    <img src="/images/td-logga.png" alt="" className="h-28"/>
                    <div className="text-2xl">
                        <p>Industrial Design Engineering</p>
                        <p>TKDES</p>
                        <p>(Teknisk Design)</p>
                    </div>
                    <p className="text-2xl">
                        2020 - 2023
                    </p>
            </div>
            <div className="grid lg:grid-cols-3">
                <div>
                    YEAR 1
                    <ol className="relative border-s border-black dark:black">
                        <TimeLineTile date="FALL TERM 2020">
                                <ol className="grid gap-2">
                                    <li>Sketching and Modeling techniques - MPP057</li>
                                    <li>Engineering methodology - MPP083</li>
                                </ol>
                        </TimeLineTile>
                        <TimeLineTile date="SPRING TERM 2021">
                                <ol className="grid gap-2">
                                    <li>Basic Form Design - MPP121</li>
                                    <li>Computer aided modeling - MPP067</li>
                                    <li>Mathematical Statistics - MVE635</li>
                                    <li>General Music Theory - 5MU047 {"(Uppsala University, Remote)"}</li>
                                </ol>
                        </TimeLineTile>
                    </ol>

                </div>
                <div>
                    YEAR 2
                    <ol className="relative border-s border-black dark:black">
                        <TimeLineTile date="FALL TERM 2021">
                                <ol className="grid gap-2">
                                    <li>Sketching and Presentation Techniques - PPU221</li>
                                    <li>Mechanics - TME010</li>
                                    <li>Product requirements engineering - MMT016</li>
                                    <li>Product Semiotics - MPP071</li>
                                    <li>Design Ergonomics - MMT010</li>
                                </ol>
                        </TimeLineTile>
                        <TimeLineTile date="SPRING TERM 2022">
                            <ol className="grid gap-2">
                                <li>Materials Science and Engineering - MTT011</li>
                                <li>Applied Mechatronics - SSY300</li>
                                <li>User Oriented Design - MMF274</li>
                                <li>Simulation based Strength of materials - MHA064</li>
                            </ol>
                        </TimeLineTile>
                    </ol>
                </div>
                <div>
                    YEAR 3
                    <ol className="relative border-s border-black dark:black">
                        <TimeLineTile date="FALL TERM 2022">
                            <ol className="grid gap-2">
                                <li>Manufacturing Engineering - MTT031</li>
                                <li>Machine Elements - MMF294</li>
                                <li>Usability Engineering - IMS050</li>
                                <li>Sustainable Development - PPU065</li>
                            </ol>
                        </TimeLineTile>
                        <TimeLineTile date="SPRING TERM 2023">
                            <ol className="grid gap-2">
                                <li>Applied Object Oriented Programming - EEN060</li>
                                <li>Introduction to Artificial Intelligence - MMS131</li>
                                <li>Bachelor's Thesis in Industrial and Materials Science - IMSX16</li>
                                <h3 className="font-semibold">BSc INDUSTRIAL DESIGN ENGINEERING</h3>

                            </ol>
                        </TimeLineTile>
                        <TimeLineTile date="SUMMER 2023">
                            Summer Course in Music Writing - MUHG47 {"(Lund University, Remote)"}
                        </TimeLineTile>
                    </ol>
                </div>
            </div>
        </div>
    );
}