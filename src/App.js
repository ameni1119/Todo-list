import React, { Component } from 'react';
import Todo from './componenets/Todo';
import Listitem from './componenets/Listitem'
import './App.css';




class App extends Component {
  state={
  item:[
    {id:1, text:'item1'},
    {id:2,text:'item2'},
    {id:3,text:'item3'}]
  }
  addItem=(item)=>{
  item.id=Math.random();
  let items=this.state.item;
  items.push(item);
  this.setState({items})
  }


  deleteitem=(id)=>{
   let item =this.state.item.filter(item=>{
     return item.id !== id
   })
   
   this.setState({item:item})
  }


  render(){
  return (
    <div className="App">
      <h2>To-Do App!</h2>
     <Todo addItem={this.addItem}/>
     <h1>Let'sget some work done !</h1>
     <Listitem item={this.state.item}
      deleteitem={this.deleteitem}></Listitem>
     
    </div>
  );}
}

export default App;
