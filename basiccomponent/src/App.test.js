import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({adapter: new EnzymeAdapter()});

const setup = (props={},state=null) =>{
  return shallow(<App {...props}/>)
}

const findByTestAttr = (wrapper,val) => {
  return wrapper.find(`[data-test="${val}"]`)
}
test('renders without crashing', () => {
  const wrapper = setup();
  const appComponent =findByTestAttr(wrapper,'component-app');
  expect(appComponent.length).toBe(1);
  });

test('renders increment button', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper,'button-increment');
  expect(button.length).toBe(1);
    
  });

test('renders counter display', () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper,'counter-display');
  
  expect(counterDisplay.length).toBe(1);
    
});
test('counter should starts with 0', () => {
    const wrapper =  setup();
    const initialCounterState = wrapper.state('counter');
    expect(initialCounterState).toBe(0);
});
