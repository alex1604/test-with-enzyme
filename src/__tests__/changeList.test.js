import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount, render } from 'enzyme';
import ChangeList from '../ChangeList.js';

//testa button för att lägga till
//testa button för att ta bort och kolla state
//testa input
//testa listan

describe('test for ChangeList component', ()=>{
  it('renders without crashing', ()=>{
    const div = document.createElement('div');
	   ReactDOM.render(<ChangeList />, div);
	   ReactDOM.unmountComponentAtNode(div);
  });

  it('renders shallow smoke test', ()=>{
    let wrapper = shallow(<ChangeList/>);
  });

  it('simulate input onChange', ()=>{
    let wrapper = shallow(<ChangeList />);
  	let wrappedInput = wrapper.find('#inputChange');
	  wrappedInput.simulate('change', {target:{ value: "hello"}} );
	  expect( wrapper.state('inputList')).toBe("hello");
  });

  it('simulate click to add to list', ()=>{
    let wrapper = shallow(<ChangeList />);
    let button = wrapper.find('button');
    wrapper.setState({inputList:"hello"});
    button.simulate('click');
    expect( wrapper.state('list')).toEqual(['hello']);
  });

  it('tests if list exists', ()=>{
    let wrapper = shallow(<ChangeList/>);
    expect(wrapper.find('ol').exists()).toBe(true);
  });

  it('tests correct length of list', ()=>{
    let wrapper = shallow(<ChangeList/>);
    wrapper.setState({list:["sleep", "eat", "shop"]});
    expect(wrapper.state('list').length).toBe(3);
  });


  it('should render children when passed in', () => {
    let wrapper = shallow((
      <ChangeList>
        <ol id="listChange" />
      </ChangeList>
    ));
    expect(wrapper.contains(<ol id="listChange"/>)).toBe(true);
  });

  it('should render <li/> children in list', () => {
    let wrapper = shallow((
      <ol>
        <li />
      </ol>
    ));
    expect(wrapper.contains(<li/>)).toBe(true);
  });


  it('simulates click events delete item', () => {
    let wrapper = mount(<ChangeList />);
    wrapper.setState({list:["sleep", "eat", "shop"]});
    expect(wrapper.state('list').length).toBe(3);
    let wrappedButton = wrapper.find('.deleteBtn').at(0);
    wrappedButton.simulate('click');
    expect( wrapper.state('list').length).toBe(2);
});

})
