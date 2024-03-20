import Profile from "./Profile";
import ProfileClass from "./ProfileClass";
import React from "react";

export class About extends React.Component {

    componentDidMount() {
        console.log("Parent Component Mounted");
    }

    componentWillUnmount() {
        console.log("Parent component unmounted");
    }

    render() {
        console.log("parent component rendered");
        return (
            <>
            <h1> About component</h1>
            <ProfileClass name="Anshika" color="red" />
            </>
        )
    }
}

// export function About() {
//     return (
//         <>
//             <h1> About component</h1>
//             <Profile name="Anshika" color="red"/>
//             <ProfileClass name="Anshika" color="red" />
//         </>
//     )
// }