import { NavButton } from "./nav-button"

export function TimelineButtons(){
    return  <div>
                <div className="flex justify-center grid-rows-1 grid-cols-2 gap-4 mb-4">
                    <div>
                        <NavButton to="/timeline">Experience</NavButton> 
                    </div>
                    <div>
                        <NavButton to="/courses">Courses</NavButton> 
                    </div>
                </div>
            </div>
}