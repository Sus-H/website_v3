import TimeLineTile from "./time-line.tile"

export function FoundationalYear(){
    return <div>
        <div className="bg-white flex justify-start border-4 border-black rounded-lg p-10 xl:p-20">
            <div>
                <div className="grid lg:flex gap-5 w-full mb-10">
                    <img src="/images/logo-zbass.png" alt="ZBASS Logo" className="h-20 object-contain"/>
                    <div>
                        <p>Engineering Foundational Year</p>
                        <p>(Tekniskt Basår)</p>
                        <p>ZBASS</p>
                    </div>
                    <img src="/images/logo_chalmers.png" alt="Chalmers Logo" className="h-20 object-contain"/>
                </div>
                <ol className="relative border-s border-black dark:black">
                    <TimeLineTile date="FALL TERM 2018 - SPRING TERM 2019">
                        <ol className="grid gap-2">
                            <li>Physics project - MVE285</li>
                            <li>Chemistry - LET923</li>
                            <li>Physics - LMA538</li>
                            <li>Calculus - MVE425</li>
                        </ol>
                    </TimeLineTile>
                </ol>
            </div>
        </div>
    </div>
}