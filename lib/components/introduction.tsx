import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";

interface Head2Props {
  children?: React.ReactNode;
}

export function Introduction({ children }: Head2Props) {
  return <div>
        <div className="flex grid-cols-2 justify-center gap-20 pb-20">
            <div className="w-2/5 space-y-10">
                <p className="text-6xl">Susanne On Huang</p>
                <p>Hello! My name's Susanne and I'm an energetic, outgoing and curious  student! I'm open minded and try to create mutual understanding in my  
                    professional work. I value well-being and aim to make everyday life as  smooth as possible for the people around me.</p>
                <div className="grid grid-rows-1 grid-cols-3">
                    <p className="no-underline hover:underline">
                        <a href="https://www.linkedin.com/in/susanne-on-huang-30057118a"  target="_blank" referrerPolicy="no-referrer">
                        <FaLinkedin className="inline size-5 mr-3"/>
                        LinkedIn
                        </a>
                    </p>
                    <p className="no-underline hover:underline">
                        <a href="https://www.instagram.com/p1nk_m8/" target="_blank" referrerPolicy="no-referrer">
                        <GrInstagram className="inline size-5 mr-3"/>
                        Instagram
                        </a>
                    
                    </p>
                    <p className="hover:underline">
                        <a href="https://kirby.fandom.com/wiki/Special:Random" target="_blank" referrerPolicy="no-referrer">
                        <GiPerspectiveDiceSixFacesRandom className="inline size-5 mr-3"/>
                        {"Random ;)"}
                        </a>
                    </p>
                </div>
            </div>
            <div className="w-48 rounded-full overflow-hidden col-span-1">
                <img src="/images/profile-pic-1.jpg" alt="Profile" className="w-full h-full object-cover" />
            </div>
        </div>
    </div>;
}