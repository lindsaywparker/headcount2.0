import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Filter from './Filter';
import CardList from './CardList';
import { shallow, mount } from 'enzyme';

it('renders App with className app', () => {
  const wrapper = shallow(<App />);

  expect(wrapper.find('.app').length).toBe(1);
});

it('should start with state including all 181 districts', () => {
  const wrapper = shallow(<App />);
  
  expect(wrapper.state().dataArray.length).toBe(181);
});

it('should filter districts and update state', () => {
  const wrapper = mount(<App />);
  const filterInput = wrapper.find('.filter-input');
  
  filterInput.simulate('change', {target: {value: 'c'}});
  expect(wrapper.state().dataArray.length).toBe(65);
  
  filterInput.simulate('change', {target: {value: 'co'}});
  expect(wrapper.state().dataArray.length).toBe(33);
  
  filterInput.simulate('change', {target: {value: 'col'}});
  expect(wrapper.state().dataArray.length).toBe(2);
});

it('should call `handleInput` on filter-input change', () => {
  const mockFn = jest.fn();
  const wrapper = shallow(<Filter handleInput={mockFn}/>);
  const filterInput = wrapper.find('.filter-input');

  filterInput.simulate('change', {target: {value: 'co'}});

  expect(mockFn).toHaveBeenCalledTimes(1);
});

it('should call `toggleSelected` on Card click', () => {
  const mockFn = jest.fn();
  const dataArray = [
    {location: 'AAA', data: {1: 0.5}, selected: false},
    {location: 'BBB', data: {1: 0.6}, selected: false},
    {location: 'CCC', data: {1: 0.7}, selected: false},
    {location: 'DDD', data: {1: 0.8}, selected: false}
  ];
  const wrapper = mount(<CardList dataArray={dataArray} toggleSelected={mockFn}/>);
  const card = wrapper.find('.card').first();

  card.simulate('click');
  expect(mockFn).toHaveBeenCalledTimes(1);

  card.simulate('click');
  expect(mockFn).toHaveBeenCalledTimes(2);
});