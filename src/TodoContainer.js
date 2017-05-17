import React, { Component } from 'react';

import AddItem from './AddItem';
import List from './List';

export default class TodoContainer extends Component {

 render() {

   return (
   <div className = "container">
    <h1>Awesome To-Do List</h1>
    < List />
    <AddItem />

   </div>
)
 }
}
