import TimeLineTile from "./time-line.tile";

export function AcademicInteractionDesign() {
    return <div className="grid sm:grid-cols-3">
            <ol className="relative border-s border-black dark:black">
                <TimeLineTile date="HT 2023">
                    <ol>
                        <li>Graphical Interfaces - DAT595</li>
                        <li>Cognitive Ergonomics - MPP036</li>
                        <li>Prototyping in Interaction Design - CIU176</li>
                        <li>Interaction Design Methodology - TDA498</li>
                    </ol>
                </TimeLineTile>
                <TimeLineTile date="VT 2024">
                    <ol>
                        <li>Wireless Networks - SSY145</li>
                        <li>Open Project in Interaction Design - CIU235</li>
                        <li>Information Visualization - CIU187</li>
                        <li>Tangible Interaction - CIU180</li>
                    </ol>
                </TimeLineTile>
            </ol>
            <ol className="relative border-s border-black dark:black">
                <TimeLineTile date="HT 2024">
                    <ol>
                        <li>Functional Programming - TDA452</li>
                        <li>Data Science in Product Realization - IMS065</li>
                        <li>Mobile Computing: Design and Implementation - CLS055</li>
                        <li>Interaction Design Project - CIU265</li>
                    </ol>
                </TimeLineTile>
                <TimeLineTile date="VT 2025" title="MSc INTERACTION DESIGN AND TECHNOLOGIES, CHALMERS UNIVERSITY OF TECHNOLOGY">
                    <ol>
                        <li>Master's Thesis in Interaction Design and Technology</li>
                    </ol>
                </TimeLineTile>
            </ol>
            <div className="grid grid-rows-2">
                <p className="grid gap-5 p-10 place-content-center">
                    <p>Interaction Design and Technologies</p>
                    <p>MPIDE</p>
                </p>
                <div className="grid place-content-end">
                    <img src="/images/it-logga.svg" alt="" />
                </div>
            </div>
    </div>
}