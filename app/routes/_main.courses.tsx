import TimelineTile from "lib/components/timeline-tile";
import { TimelineButtons } from "lib/components/timeline-buttons";
import { SubCard } from "lib/components/sub-card";


export default function Courses() {
    return (
        <div className="h-full">
            <TimelineButtons></TimelineButtons>
            <SubCard title="MSc INTERACTION DESIGN AND TECHNOLOGIES, CHALMERS UNIVERSITY OF TECHNOLOGY"/>
            <ol className="relative border-s border-gray-200 dark:border-gray-700">
                <TimelineTile date="VT 2025">
                    <ol>
                        <li>Master's Thesis in Interaction Design and Technology</li>
                    </ol>
                </TimelineTile>
                <TimelineTile date="HT 2024">
                    <ol>
                        <li>Functional Programming - TDA452</li>
                        <li>Data Science in Product Realization - IMS065</li>
                        <li>Mobile Computing: Design and Implementation - CLS055</li>
                        <li>Interaction Design Project - CIU265</li>
                    </ol>
                </TimelineTile>
                <TimelineTile date="VT 2024">
                    <ol>
                        <li>Wireless Networks - SSY145</li>
                        <li>Open Project in Interaction Design - CIU235</li>
                        <li>Information Visualization - CIU187</li>
                        <li>Tangible Interaction - CIU180</li>
                    </ol>
                </TimelineTile>
                <TimelineTile date="HT 2023">
                    <ol>
                        <li>Graphical Interfaces - DAT595</li>
                        <li>Cognitive Ergonomics - MPP036</li>
                        <li>Prototyping in Interaction Design - CIU176</li>
                        <li>Interaction Design Methodology - TDA498</li>
                    </ol>
                </TimelineTile>
                <TimelineTile date="SUMMER 2023">
                    Summer Course in Note Writing - MUHG47 {"(Lund University, Remote)"}
                </TimelineTile>
            </ol>
            <SubCard title="BSc INDUSTRIAL DESIGN ENGINEERING, CHALMERS UNIVERSITY OF TECHNOLOGY"/>
            <ol className="relative border-s border-gray-200 dark:border-gray-700">
                <TimelineTile date="VT 2023">
                    <ol>
                        <li>Bachelor's Thesis in Industrial and Materials Science - IMSX16</li>
                        <li>Introduction to Artificial Intelligence - MMS131</li>
                        <li>Applied Object Oriented Programming - EEN060</li>
                    </ol>
                </TimelineTile>
                <TimelineTile date="HT 2022">
                    <ol>
                        <li>Usability Engineering - IMS050</li>
                        <li>Manufacturing Engineering - MTT031</li>
                        <li>Machine Elements - MMF294</li>
                        <li>Sustainable Development - PPU065</li>
                    </ol>
                </TimelineTile>
                <TimelineTile date="VT 2022">
                    <ol>
                        <li>Materials Science and Engineering - MTT011</li>
                        <li>Applied Mechatronics - SSY300</li>
                        <li>User Oriented Design - MMF274</li>
                        <li>Simulation based Strength of materials - MHA064</li>
                    </ol>
                </TimelineTile>
                <TimelineTile date="HT 2021">
                    <ol>
                        <li>Sketching and Presentation Techniques - PPU221</li>
                        <li>Mechanics - TME010</li>
                        <li>Product requirements engineering - MMT016</li>
                        <li>Product Semiotics - MPP071</li>
                        <li>Design Ergonomics - MMT010</li>
                    </ol>
                </TimelineTile>
                <TimelineTile date="VT 2021">
                    <ol>
                        <li>Computer aided modeling - MPP067</li>
                        <li>Mathematical Statistics - MVE635</li>
                        <li>Basic Form Design - MPP121</li>
                        <li>General Music Theory - 5MU047 {"(Uppsala University, Remote)"}</li>
                    </ol>
                </TimelineTile>
                <TimelineTile date="HT 2020">
                    <ol>
                        <li>Sketching and Modeling techniques - MPP057</li>
                        <li>Engineering methodology - MPP083</li>
                    </ol>
                </TimelineTile>
                
            </ol>
            <SubCard title="MATHEMATICS PROGRAMME, GOTHENBURG UNIVERSITY"/>
            <ol className="relative border-s border-gray-200 dark:border-gray-700">
                <TimelineTile date="VT 2020">
                    <ol>
                        <li>Multivariable Analysis - MMG300</li>
                        <li>Programming with Matlab - MVG300</li>
                        
                    </ol>
                </TimelineTile>
                <TimelineTile date="HT 2019">
                    <ol>
                        <li>
                            Mathematics I - MMG200
                                <li> Discrete Mathematics</li>
                                <li> Linear Algebra</li>
                                <li> Analysis in one variable</li>
                        </li>
                    </ol>
                </TimelineTile>
            </ol>
            <SubCard title="ENGINEERING PREPARATORY YEAR, CHALMERS UNIVERSITY OF TECHNOLOGY"/>
            <ol className="relative border-s border-gray-200 dark:border-gray-700">
                <TimelineTile date="HT 2018 - VT 2019">
                    <ol>
                        <li>Physics project - MVE285</li>
                        <li>Chemistry - LET923</li>
                        <li>Physics - LMA538</li>
                        <li>Calculus - MVE425</li>
                    </ol>
                </TimelineTile>
            </ol>
        </div>
    );
}