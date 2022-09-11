import React from "react";
import { Component } from "react";

class Welcome extends Component {

    constructor(props) {
        super(props) 
        this.state = {
            message : 'welcome state',
        }
    }

    message() {
        this.setState({
            message : "Thank you !"
        })
    }

    render() {        
        return (
            <div>
                <h1>{this.state.message}</h1>
                <h2> {this.props.name} </h2>
                <button onClick={ () => this.message()} >Click me!</button>
            </div>
        )
    }
}

export default Welcome;