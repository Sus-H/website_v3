import { useState } from "react";

function Counter(){
    const [count, setCount] = useState(0);
    const handleMouseDown = () => {setCount(count + 1)};
    return(
        <div>
            <h2>Count: {count}</h2>
            <button onMouseDown={handleMouseDown}>
                Increment on Mouse Down
            </button>
        </div>
    )
}