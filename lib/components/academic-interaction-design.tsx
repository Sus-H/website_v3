import TimeLineTile from "./time-line.tile";

export function AcademicInteractionDesign() {
    return <div>
                <div className="lg:flex place-content-start gap-5 mb-10">                        
                    <div>
                        <img src="/images/it-logga.svg" alt="" className="h-20" />
                    </div>
                    <p className="text-2xl">
                        <p>Interaction Design and Technologies</p>
                        <p>MPIDE</p>
                    </p>
                    <p className="text-2xl">
                        2023 - 2025
                    </p>
                </div>

                <div className="grid lg:grid-cols-2">
                    <div>
                        YEAR 4
                        <ol className="relative border-s border-black dark:black">
                            <TimeLineTile date="FALL TERM 2023">
                                <ol className="grid gap-2">
                                    <li>Graphical Interfaces - DAT595</li>
                                    <li>Cognitive Ergonomics - MPP036</li>
                                    <li>Prototyping in Interaction Design - CIU176</li>
                                    <li>Interaction Design Methodology - TDA498</li>
                                </ol>
                            </TimeLineTile>
                            <TimeLineTile date="SPRING TERM 2024">
                                <ol className="grid gap-2">
                                    <li>Wireless Networks - SSY145</li>
                                    <li>Open Project in Interaction Design - CIU235</li>
                                    <li>Information Visualization - CIU187</li>
                                    <li>Tangible Interaction - CIU180</li>
                                </ol>
                            </TimeLineTile>
                        </ol>
                    </div>
                    <div>
                        YEAR 5
                        <ol className="relative border-s border-black dark:black">
                            <TimeLineTile date="FALL TERM 2024">
                                <ol className="grid gap-2">
                                    <li>Functional Programming - TDA452</li>
                                    <li>Data Science in Product Realization - IMS065</li>
                                    <li>Mobile Computing: Design and Implementation - CLS055</li>
                                    <li>Interaction Design Project - CIU265</li>
                                </ol>
                            </TimeLineTile>
                            <TimeLineTile date="SPRING TERM 2025">
                                <ol>
                                    <li>Master's Thesis in Interaction Design and Technology</li>
                                    <h3 className="font-semibold">MSc INTERACTION DESIGN AND TECHNOLOGIES</h3>
                                </ol>
                            </TimeLineTile>
                        </ol>
                    </div>
                </div>  
    </div>
}