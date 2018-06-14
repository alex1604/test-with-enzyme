import React, {Component} from 'react';

/*Komponenten ska innehålla ett textfält där användaren kan skriva in en text. Där ska finnas en button, som man kan klicka på för att lägga till texten i en lista. Komponenten ska visa listan på något lämpligt sätt. När listan renderas ska varje element i den förses med en button som kan användas för att ta bort elementet.*/

class ChangeList extends Component{
  constructor(props){
    super(props);
    this.state = {inputList:'', list: [], disabled: true}
  }

  addToList = event=>{
    let newElement = this.state.inputList;
    this.setState({list: [...this.state.list, newElement], inputList:'', disabled:true});
  }
  handleInput = event=>{
    this.setState({inputList: event.target.value, disabled:false})
  }
  handleDelete = event =>{
    let item = event.target.name;
    let newList = []
    for(let x = 0; x < this.state.list.length; x++){
      if(this.state.list[x] !== this.state.list[item]){
        newList.push(this.state.list[x]);
      }
    }
    this.setState({list: newList});
  }
  render(){
    let  listItems = this.state.list.map((item, index) =>
    <li key={index+item}>
      <span>{item}</span>
      <button name={index} className="deleteBtn" onClick={event => this.handleDelete(event)}>Delete</button>
    </li>)

    return(
      <div>
        <input id="inputChange" type="text" placeholder="Write text"
        value={this.state.inputList}
        onChange={this.handleInput}/>
        <button className="addBtn" onClick={this.addToList} disabled={this.state.disabled}>Add to list</button>
        <ol id="listChange">{listItems}</ol>
      </div>
    )
  }
}

export default ChangeList;
