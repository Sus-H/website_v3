import TimeLineTile from "./time-line.tile"

export function FoundationalYear(){
    return <div>
        <div className="bg-white grid sm:flex justify-center border-4 border-black rounded-lg p-20">
            <ol className="relative border-s border-black dark:black">
                <TimeLineTile date="HT 2018 - VT 2019">
                    <ol>
                        <li>Physics project - MVE285</li>
                        <li>Chemistry - LET923</li>
                        <li>Physics - LMA538</li>
                        <li>Calculus - MVE425</li>
                    </ol>
                </TimeLineTile>
            </ol>
            <div>
                <img src="/images/logo_chalmers.png" alt="Chalmers Logo" className="h-44"/>
            </div>
            <div>
                Engineering Foundational Year
                (Tekniskt Basår)
                ZBASS
            </div>
            <div>
                <img src="/images/logo-zbass.png" alt="ZBASS Logo" className="h-32"/>
            </div>
        </div>
    </div>
}