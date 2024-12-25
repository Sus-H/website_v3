import TimeLineTile from "./time-line.tile"

export function AcademicMathematicalSciences(){
    return <div>
        <div className="bg-white grid sm:flex justify-center border-4 border-indigo-800 rounded-lg p-20">
            <ol className="relative border-s border-black dark:black">
                <TimeLineTile date="HT 2019">
                        <ol>
                            <li>
                                Mathematics I - MMG200
                                    <li> Discrete Mathematics</li>
                                    <li> Linear Algebra</li>
                                    <li> Analysis in one variable</li>
                            </li>
                        </ol>
                </TimeLineTile>
                <TimeLineTile date="VT 2020">
                        <ol>
                            <li>Multivariable Analysis - MMG300</li>
                            <li>Programming with Matlab - MVG300</li>
                        </ol>
                </TimeLineTile>
            </ol>
            <div>
                <img src="/images/logo_GU.png" alt="Gothenburg University Logo" className="h-44"/>
            </div>
            <div>
                Mathematical Sciences
                (Matematiska Vetenskaper)
                MV
            </div>
            <div>
                <img src="/images/logo-gu-chalmers.png" alt="Gothenburg and Chalmers Logo" className="h-20"/>
            </div>
        </div>
    </div>
}