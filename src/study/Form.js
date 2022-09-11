import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         username : '',
         comments : '',
         topic : 'react',
      }
    }

    handleUserNameChange = (e) => {
        this.setState({
            username : e.target.value,
        })
    }

    handleComments = (e) => {
        this.setState({
            comments : e.target.value,
        })
    }

    handleTopicChange = (e) => {
        this.setState({
            topic : e.target.value,
        })
    }

    handleSubmit =(e) => {
        alert(`hey my name is ${this.state.username}, and comments ${this.state.comments} thn ${this.state.topic}`);
        e.preventDefault();
    }

  render() {
    const {username,comments,topic} = this.state;
    return (
        <form onSubmit={this.handleSubmit}>
            <div>
                <label>Username</label>
                <input type = 'text' value={username} onChange = {this.handleUserNameChange} />
                {/* console.log("hey"); */}
            </div>
            <div>
                <label>Comments</label>
                <textarea value={comments} onChange = {this.handleComments} />
            </div>
            <div>
                <label>Topic</label>
                <select value={topic} onChange = {this.handleTopicChange}>
                    <option value= "react" >React</option>
                    <option value= "angular" >Angular</option>
                    <option value= "vue" >Vue</option>
                </select>
            </div>
            <button type='submit'>Submit</button>
        </form>
    )
  }
}

export default Form