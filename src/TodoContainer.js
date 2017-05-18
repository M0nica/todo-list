import React, { Component } from 'react';

import AddItem from './AddItem';
import List from './List';

let initialItems = [
    "Get milk from the store",
    "Call my mom...",
    "Build the internet",
    "Slim Jims and Diet Coke",
    "Bake Christmas Cookies For NYTimes Party",
];

export default class TodoContainer extends Component {

    constructor(props) {
        super(props);
        this.state = { items: initialItems }
   this.addItemToList = this.addItemToList.bind(this)
   this.removeItemFromList = this.removeItemFromList.bind(this)
    }

    removeItemFromList(item){
    initialItems.splice(item, 1);

    //sends updated list to component and has it re-renders
    this.setState({ items: initialItems });
}

addItemToList(){
    let newItem = document.getElementById('new-item').value;
    initialItems.push(newItem)
    this.setState({ items: initialItems });
    document.getElementById('new-item').value = '';
}

 render() {

   return (
   <div className = "container">
    <h1>Awesome To-Do List</h1>
      <AddItem addItemToList={this.addItemToList}/>
      <List items={this.state.items} removeItemFromList={this.removeItemFromList} />


   </div>
)
 }
}
