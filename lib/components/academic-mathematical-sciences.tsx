import TimeLineTile from "./time-line.tile"

export function AcademicMathematicalSciences(){
    return <div>
        <div className="bg-white grid justify-start border-4 border-indigo-800 rounded-lg p-20">
            <div className="grid lg:flex gap-5 w-full mb-10">
                <img src="/images/logo_GU.png" alt="Gothenburg University Logo" className="h-20"/>
                <div>
                    <p>Mathematical Sciences</p>
                    <p>(Matematiska Vetenskaper)</p>
                    <p>MV</p>
                </div>
                <img src="/images/logo-gu-chalmers.png" alt="Gothenburg and Chalmers Logo" className="h-20"/>
            </div>
            <ol className="relative border-s border-black dark:black">
                <TimeLineTile date="FALL TERM 2019">
                        <ol>
                            <li className="grid gap-2">
                                Mathematics I - MMG200
                                    <li> Discrete Mathematics</li>
                                    <li> Linear Algebra</li>
                                    <li> Analysis in one variable</li>
                            </li>
                        </ol>
                </TimeLineTile>
                <TimeLineTile date="SPRING TERM 2020">
                        <ol className="grid gap-2">
                            <li>Multivariable Analysis - MMG300</li>
                            <li>Programming with Matlab - MVG300</li>
                        </ol>
                </TimeLineTile>
            </ol>

        </div>
    </div>
}