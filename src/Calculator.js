import React, {Component} from 'react';

/*
Komponenten ska innehålla ett textfält och två button-element. Den ska dessutom skriva ut
ett tal. Talet ska finnas lagrat i komponentens state. Användaren ska kunna skriva in strängar
i textfältet. När man klickar på den första knappen ska värdet i state ökas; den andra
knappen minskar värdet.
Om användaren skriver in ett tal i textfältet så ska det ersätta talet som finns lagrat i
state. Men om användaren skriver in något som inte går att göra om till ett tal så ska värdet
behållas.*/


class Calculator extends Component {
	constructor(props) {
		super(props);
		this.state = {
			number: 0
		};
	}
	render() {
		return (
			<div>
			  <h3>Calculator: </h3>
				Type something:<input type="text" id="input" placeholder="Type a number or some text" onKeyPress={this.handleInput}/>
				<div id="buttons">
					<button onClick={this.increase} type="button" id="increase">Increase</button>
					<button onClick={this.decrease} type="button" id="decrease">Decrease</button>
					<button onClick={()=>{this.setState({number: 0})}} type="button" id="clear">Clear</button>
				</div>
				Value: {this.state.number}
			</div>
		);
	}
	increase = event =>{
		this.setState({number: this.state.number + 1, click: true})
	}
	decrease = event =>{
		this.setState({number: this.state.number - 1, click: true})

	}
	handleInput = event => {
		// console.log(event.key)
		if (!isNaN(Number(event.key)) && Number(event.key) !== Infinity){
			if(this.state.number === 0){
				this.setState({number: Number(event.key), click: false})
			} else if (!this.state.click){
				let prev = String(this.state.number);
				let next = prev + event.key;
				this.setState({number: Number(next), click: false})
			} else {
				this.setState({number: event.key, click: false})
			}
		}
	}

}

export default Calculator;
