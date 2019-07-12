import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({adapter: new EnzymeAdapter()});

const setup = (props={},state=null) =>{
  const wrapper = shallow(<App {...props}/>)
  if(state)
  wrapper.setState(state);
  return wrapper;
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
test('clicking the counter button then increment the counter',()=>{
  const counter = 3;
  const wrapper =  setup(null,{counter});
  const button = findByTestAttr(wrapper,'button-increment');
  button.simulate('click');
  wrapper.update();
  const counterDisplay = findByTestAttr(wrapper,'counter-display');
  expect(counterDisplay.text()).toContain(counter  + 1);

})
test('renders the decrement button',()=>{
  const wrapper = setup();
  const button = findByTestAttr(wrapper,'button-decrement');
  expect(button.length).toBe(1);
})
test('clicking the decrement counter then decrease the counter value',()=>{
  const counter =4;
  const wrapper =setup(null,{counter});
  const button = findByTestAttr(wrapper,'button-decrement');
  button.simulate('click');
  wrapper.update();
  const counterDisplay = findByTestAttr(wrapper,'counter-display');
  expect(counterDisplay.text()).toContain(counter - 1);
})
test('render validation message if counter is less than zero',()=>{
  const error = true;
  const wrapper = setup(null,{error});
  const validationMsg = findByTestAttr(wrapper,'validation-error');
  expect(validationMsg.length).toBe(1);
})

test('default no error message',()=>{
  const counter = null;
  const wrapper = setup(null,{counter});
  const validationMsg = findByTestAttr(wrapper,'validation-error');
  expect(validationMsg.length).toBe(0);
})