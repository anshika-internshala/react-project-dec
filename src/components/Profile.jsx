import { useState, useEffect } from "react";

function Profile (props) {

    const {name , color} = props;
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(1);

    function updateCount() {
        setCount(count + 1)
    }

    const timer = setInterval(() => {
        console.log("Timer has started");
    }, 1000);

    useEffect(() => {
        console.log("useEffect is called");

        return() =>  {
            clearInterval(timer);
            console.log("Profile func component unmounted");
        }
    }, [count]);

    console.log("functional component rendered");

    return (
        <>
            <h1>Profile Component</h1>
            <h2>{name}</h2>
            <h2>{color}</h2>
            <h3>{count}</h3>
            <h3>{count1}</h3>
            <button onClick={updateCount}>Update Count</button>
        </>
    )
}

export default Profile;