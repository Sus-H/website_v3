import {TicTacToeGame} from "lib/components/tic-tac-toe";
import {BoggleGame} from "lib/components/word-boggle";

export default function Test() {
    return(
    <div className="h-screen space-y-10">
        <p>
            TIC TAC TOE!
            <img src="\images\kirbyidle.gif" className="w-9 inline -mt-5"/>
        </p>

        <div className="flex justify-center">
            <TicTacToeGame/>
        </div>
        <div className="">
            Boggling hard or hardly boggling
            <BoggleGame/>
        </div>

    </div>
    ); 
}
