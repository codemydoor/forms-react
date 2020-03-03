import React, { Component } from 'react';

 class form extends Component {
  constructor(props){
    super(props);
    this.state = {sentense: ' '}
  };
  myChanges =(event)=>{this.setState({sentense: event.target.value})};
  render() {
    return (
      <div>
        <form>
         <h1> {this.state.sentense} </h1>
          
          <input type = 'text' placeholder = "type a sentense here" onChange ={this.myChanges}></input>
        </form>
      </div>
    
    );
  }
}
export default form;
