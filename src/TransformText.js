import React, {Component} from 'react';

/*Komponenten ska innehålla ett input-element som användaren kan skriva in text i. När användaren skriver i fältet ska komponenten skriva ut följande. Tänk på att skriva ut respektive sträng i ett HTML-element som du kan plocka ut med en selektor. Använd hellre CSS-klass än id.
texten baklänges, "10" → "01"
texten konverterad till bara stora bokstäver, "TeDeDe" → "TEDEDE"
texten som ett tal upphöjt till två, "5" → "25"
*/
class TransformText extends Component{
  constructor(props){
    super(props);
    this.state = { text: '', backwords:'', toUpperCase:'', pow:0};
  };
  handleInput= (event)=> {
    this.setState({text: event.target.value});
    this.transformText(event.target.value)
  }
  transformText = param => {
    this.textBack(param);
    this.upperCase(param);
    this.power(param);
  };
  textBack = (x) => {
    if(typeof x === "string"){
      const backValue = x.split('').reverse().join('');
      this.setState({backwords: backValue});
    }
  };
  upperCase = (x) => {
    if(typeof x === "string"){
      const uppValue = x.toUpperCase()
      this.setState({toUpperCase: uppValue});
    }
  };
  power = (x) =>{
    if(isNaN(x)|| x<0){
      // console.log('not valid parmeter');
    }else{
      const powValue = Math.pow(x, 2)
      this.setState({pow: powValue });
    }
  };

  render(){
    return(
      <div>
        <input className="tranformInput" type="text" value={this.state.text} onChange={event => this.handleInput(event)} />
        <div>Text backwords: <span className="backwords"> {this.state.backwords}</span></div>
        <div>Text to upper case: <span className="toUpperCase">{this.state.toUpperCase}</span></div>
        <div>Number to power of: <span className="power">{this.state.pow}</span></div>
      </div>
    )
  }
}

export default TransformText;
