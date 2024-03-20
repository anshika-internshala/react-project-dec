import React from "react";

class ProfileClass extends React.Component {

    constructor(props) {
        console.log("child constructor");
        super(props); 
        this.state = {
            count: 0,
            count1: 1
        }  
    }

    componentDidMount() {
        console.log("child component has been mounted");
    }

    componentDidUpdate(prevValue , nextValue) {
        console.log("child component has been updated");
    }

    componentWillUnmount() {

        console.log("child component has been unmounted");

    }

    // update() {
    //     console.log("update called")
    // }

    render () {
        console.log("child render");
        const {name , color} = this.props;
        const {count , count1} = this.state;

        function updateCount() {
            this.setState({count: count + 1});
        }

        return (
            <>
                <h1>Profile Class Based Components</h1>
                <h2>{name}</h2>
                <h2>{color}</h2>
                <h3>{count}</h3>
                <h3>{count1}</h3>
                <button onClick={updateCount.bind(this)}>Update Count</button>
            </>
        )
    }
          
}

export default ProfileClass;