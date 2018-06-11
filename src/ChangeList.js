import React, {Component} from 'react';

/*Komponenten ska innehålla ett textfält där användaren kan skriva in en text. Där ska finnas en button, som man kan klicka på för att lägga till texten i en lista. Komponenten ska visa listan på något lämpligt sätt. När listan renderas ska varje element i den förses med en button som kan användas för att ta bort elementet.*/

class ChangeList extends Component{
  constructor(props){
    super(props);
    this.state = {inputList:'', list: []}
  }

  addToList = event=>{
    let newelement = this.state.inputList;
    this.setState({list: [...this.state.list, newelement], inputList:''});
  }
  handleInput = event=>{
    this.setState({inputList: event.target.value})
  }
  render(){
    let  listItems = this.state.list.map((item, index) =>
    <li key={index+item}>
      <span>{item}</span>
      <button onClick={this.handleDelete}>Delete</button>
    </li>)


    return(
      <div>
        <input id="inputChange" type="text" placeholder="Write text"
        value={this.state.inputList}
        onChange={this.handleInput}/>
        <button onClick={this.addToList}>Add to list</button>
        <ul id="listChange">{listItems}</ul>
      </div>
    )
  }
}

export default ChangeList;
