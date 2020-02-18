import React, { Component } from "react";
 
class Todo extends Component{
    constructor(props){
        super(props)
        this.state={
            text:''
        }
    }
    handleInput=(e)=>{
        const newitem= this.state.text;
            this.setState({
                text:e.target.value,
            })
            
    }
    handeleSubmit=(e)=>{
        e.preventDefault();
     this.props.addItem(this.state)
     this.setState({text:''})
    }
    render(){
   return(
       <div className='App'> 
       <header>
       <form id='to-do-form'  onSubmit={this.handeleSubmit} value={this.state.text}>
           <input type='text'placeholder='Enter Text' id='text'
           value={this.state.text} onChange={this.handleInput}/>
           <button type='submit'>Add</button>
       </form>
      </header>
     </div>);
    }
        
    
}
export default Todo