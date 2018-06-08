import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount, render} from 'enzyme';
import Calculator from '../Calculator.js';

// <div> <button onClick=?>Turn on</button> </div>
// initialState: { on: false }
// klickfunktion, state
describe('Calculator component test suite', () => {
	let wrapper = shallow(<Calculator />);
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<Calculator />, div);
		ReactDOM.unmountComponentAtNode(div);
	})
	test('shallow smoke test', () => {
		wrapper;
	})

	test('initial state should be 0', () => {
		expect( wrapper.state('number') ).toBe( 0 );
	})

	test('state increase by one when click on increase button', () => {
		let button = wrapper.find('button').at(0);
		button.simulate('click');
		expect( wrapper.state('number') ).toBe( 1 );
	})
	test('state decrease by one when click on decrease button', () => {
		let button = wrapper.find('button').at(1);
		button.simulate('click');
		expect( wrapper.state('number') ).toBe( 0 );
	})
	test('state remains the same when text is typed in input field', () => {
		let input = wrapper.find('input');
		input.simulate('keyPress', {key: 'a'});
		expect( wrapper.state('number') ).toBe( wrapper.state('number') );
		
	})
	test('state is replaced when number is typed in input field', () => {
		let input = wrapper.find('input');
		input.simulate('keyPress', {key: '5'});
		expect( wrapper.state('number') ).toBe( 5 );
		
	})
	test('new number input is added to existing number in input field and state is replaced', () => {

		let input = wrapper.find('input');
		input.simulate('keyPress', {key: '5'});
		expect( wrapper.state('number') ).toBe( 55 );
		
	})
	test('if undefined in input field then nothing happens ', () => {
		let input = wrapper.find('input');
		input.simulate('keyPress', {key: 'undefined'});
		expect( wrapper.state('number') ).toBe( wrapper.state('number') );
		
	})
	test('if empty string in input field then nothing happens ', () => {
		let input = wrapper.find('input');
		input.simulate('keyPress', {key: ''});
		expect( wrapper.state('number') ).toBe( wrapper.state('number') );
		
	})
	test('if null in input field then nothing happens ', () => {
		let input = wrapper.find('input');
		input.simulate('keyPress', {key: 'null'});
		expect( wrapper.state('number') ).toBe( wrapper.state('number') );
		
	})
	test('if string Infinity in input field then nothing happens ', () => {
		let input = wrapper.find('input');
		input.simulate('keyPress', {key: 'Infinity'});
		expect( wrapper.state('number') ).toBe( wrapper.state('number') );
		
	})
})

