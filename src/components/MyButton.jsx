import { useState } from "react";

export function MyButton() {

    const [count, setCount] = useState(0);
    //let count = 0;

    function handleClick() {

       
        
        setCount(count + 1);

        console.log(`clicked ${count} times`);
    }
    return (
    <>
        <button onClick={handleClick}>MyButton--- Clicked {count} times</button>
    </>
    )
}