import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import Calculator from '../Calculator.js';

// <div> <button onClick=?>Turn on</button> </div>
// initialState: { on: false }
// klickfunktion, state
/*describe('OnOff component test suite', () => {

	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<OnOff />, div);
		ReactDOM.unmountComponentAtNode(div);
	})
	test('shallow smoke test', () => {
		let wrapper = shallow(<OnOff />);
	})

	test('initial state should be false', () => {
		let wrapper = shallow(<OnOff />);
		expect( wrapper.state('on') ).toBe( false );
	})

	test('state from false to true when clicked', () => {
		let wrapper = shallow(<OnOff />);
		let button = wrapper.find('button').at(0);
		button.simulate('click');
		expect( wrapper.state('on') ).toBe( true );
	})
	test('state from true to false when clicked', () => {
		let wrapper = shallow(<OnOff />);
		wrapper.setState({ on: true });
		let button = wrapper.find('button').at(0);
		button.simulate('click');
		expect( wrapper.state('on') ).toBe( false );
	})


})*/