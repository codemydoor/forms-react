import React, { Component } from 'react';

 class form extends Component {
  constructor(props){
    super(props);
    this.state = {username: ' '}
  };
  myChanges =(event)=>{this.setState({username: event.target.value})};
  render() {
    return (
      <div>
        <form>
         <h1>My name is  {this.state.username} </h1>
          <label>Full Name</label>
          <input type = 'text' placeholder = "type name here" onChange ={this.myChanges}></input>
        </form>
      </div>
    
    );
  }
}
export default form;
