import { BsStars } from "react-icons/bs";

export function Welcome() {
    return <div className="m-5">
        <div className="mt-5 text-base font-bold flex justify-center gap-2">
            <div><BsStars className="inline"/></div><p>Welcome to My Organized Chaos!</p><div><BsStars className="inline"/></div>
        </div>
        <div className="mb-3 text-base font-bold flex justify-center">
            Site is under construction, pardon the mess {":)"}
        </div>
        <img src="/images/coat_kirby_1_trans.png" alt="Mulle Meck Kirby" 
        className="sm:relative right-32 h-36"/>
    </div>
}