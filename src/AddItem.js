import React, { Component } from 'react';

export default class AddItem extends Component {

render(){
  return (
    <div>
    <input type="text" placeholder="Add your new item here" />
    <button>Add Item</button>
    </div>
  );
}
}
