import React, { Component } from 'react';

 class form extends Component {
  constructor(props){
    super(props);
    this.state = {sentense: ' '}
  };
  myChanges =(event)=>{
    this.setState({value:event.target.value})
  }
  submithandler =(event)=>{alert('welcome ' + this.state.value)
  event.preventDefault();
 };


  render() {
    return (
      <div>
        <form onSubmit={this.submithandler}> 
         <p className ="text">{this.state.sentense} </p>
          
          <input type = 'text' placeholder = "type your name here" value = {this.state.value} onChange={this.myChanges} ></input>
          <button type = 'submit' value= "submit">SUBMIT</button>
        </form>
      </div>
    
    );
  }
}
export default form;
