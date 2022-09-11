import React, { Component } from 'react'

class UserGreetings extends Component {

    constructor(props){
        super(props) 

        this.state = {
            isLoggedIn : true,
        }
    }


    render() {


        return this.state.isLoggedIn && <div> Welcome Greetings. </div>


    // return this.state.isLoggedIn ?
    //     <div>Welcome Greetings..</div> :
    //     <div>Welcome Guest</div>;

    // let message;
    // if(this.state.isLoggedIn) {
    //     message = <div>User Greetings</div>
    // }
    // else {
    //     message = <div>User Guest</div>
    // }

    // return <div> {message} </div>;

    // if(this.state.isLoggedIn) {
    //     return <div>User Greetings</div>
    // }
    // else {
    //     return <div>User Guest</div>
    // }

    // return (
    //   <div>
    //     <div>UserGreetings</div>
    //     <div>Welcome Greetings</div>
    //   </div>
    // )
  }
}

export default UserGreetings