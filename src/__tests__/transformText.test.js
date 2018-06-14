import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount, render } from 'enzyme';
import TransformText from '../TransformText.js';

//kolla om komponenten renderas
//simulera input change
//backwords returnerar korrekt värde
//toUpperCase  ---||---
//squere - positiv nummer,

describe("test suite for transformText" , () =>{

  it('renders component without crashing', ()=>{
    const div = document.createElement('div');
	   ReactDOM.render(<TransformText />, div);
	   ReactDOM.unmountComponentAtNode(div);
  });

  it('renders shallow smoke test', ()=>{
    let wrapper = shallow(<TransformText/>);
  });

  it('finds input', ()=>{
    let wrapper = shallow(<TransformText />);
    expect( wrapper.find('.input').at(0).length).toBe(1);
  });

  it('finds span .backwords, .toUpperCase, .power', ()=>{
    let wrapper = shallow(<TransformText />);
    expect( wrapper.find('.backwords').length).toBe(1);
    expect( wrapper.find('.toUpperCase').length).toBe(1);
    expect( wrapper.find('.power').length).toBe(1);
  });

  it('simulate change in input', ()=>{
    let wrapper = shallow(<TransformText />);
    let input =  wrapper.find('input').at(0);
    input.simulate('change', {target:{ value: "hello"}} );
    expect( wrapper.state('text')).toBe("hello");
  });

  it('returns correct value for textBack', ()=>{
    let wrapper = shallow(<TransformText />);
    let input =  wrapper.find('input').at(0);
    input.simulate('change', {target:{ value: "hello"}} );
    expect(wrapper.state('backwords')).toBe("olleh");
  });

  it('returns correct value for upperCase', ()=>{
    let wrapper = shallow(<TransformText />);
    let input =  wrapper.find('input').at(0);
    input.simulate('change', {target:{ value: "harry potter"}} );
    expect(wrapper.state('toUpperCase')).toBe("HARRY POTTER");
  });

  it('returns correct value for power', ()=>{
    let wrapper = shallow(<TransformText />);
    let input =  wrapper.find('input').at(0);
    input.simulate('change', {target:{ value: 4}} );
    expect(wrapper.state('pow')).toBe(16);
  });
})
