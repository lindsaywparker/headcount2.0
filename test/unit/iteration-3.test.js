import React from 'react';
import DistrictRepository from '../../src/helper.js';
import kinderData from '../../data/kindergartners_in_full_day_program.js';
import App from '../../src/App';
import CardList from '../../src/CardList';
import Card from '../../src/Card';
import Filter from '../../src/Filter';
import { shallow, mount } from 'enzyme';

describe('DistrictRepository iteration 3', () =>  {
  const district = new DistrictRepository(kinderData);
  const dataArray = district.findAllMatches();

  test('search should start unfiltered ', () => {
    const wrapper = shallow(<CardList dataArray={dataArray}/>);
    expect(wrapper.find(Card).length).toBe(181);
  });

  test('search should filter ', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<Filter handleInput={mockFn}/>);
    const filterInput = wrapper.find('.filter-input');
    const expectedState = {
      input: 'col'
    }
    
    filterInput.simulate('change', {target: {value: 'c'}});
    filterInput.simulate('change', {target: {value: 'co'}});
    filterInput.simulate('change', {target: {value: 'col'}});
    
    expect(wrapper.state()).toEqual(expectedState);
    expect(mockFn).toHaveBeenCalledTimes(3);
  });
  
  test('search should filter the results ', () => {
    const wrapper = mount(<App />);
    const filterInput = wrapper.find('.filter-input');
    filterInput.simulate('change', {target: {value: 'col'}});
    
    expect(wrapper.find(Card).length).toBe(2);
  });

});
