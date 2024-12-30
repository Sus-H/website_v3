import TimeLineTile from "./time-line.tile"

export function FoundationalYear(){
    return <div>
        <div className="bg-white grid sm:flex justify-start border-4 border-black rounded-lg p-20">
            <div className="grid gap-5 mb-10 sm:w-1/2">
                <img src="/images/logo-zbass.png" alt="ZBASS Logo" className="h-20"/>
                <div>
                    <p>Engineering Foundational Year</p>
                    <p>(Tekniskt Basår)</p>
                    <p>ZBASS</p>
                </div>
                <img src="/images/logo_chalmers.png" alt="Chalmers Logo" className="h-20"/>
            </div>
            <ol className="relative border-s border-black dark:black">
                <TimeLineTile date="FALL TERM 2018 - SPRING TERM 2019">
                    <ol>
                        <li>Physics project - MVE285</li>
                        <li>Chemistry - LET923</li>
                        <li>Physics - LMA538</li>
                        <li>Calculus - MVE425</li>
                    </ol>
                </TimeLineTile>
            </ol>
        </div>
    </div>
}