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
         <p className ="text">{this.state.sentense} </p>
          
          <input type = 'text' placeholder = "type a sentense here" onChange ={this.myChanges}></input>
        </form>
      </div>
    
    );
  }
}
export default form;
