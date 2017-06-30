import React from 'react';
import DistrictRepository from '../../src/helper.js';
import kinderData from '../../data/kindergartners_in_full_day_program.js';
import Comparison from '../../src/Comparison';
import Card from '../../src/Card';
import { shallow, mount } from 'enzyme';

describe('DistrictRepository iteration 5', () =>  {
  const district = new DistrictRepository(kinderData);

  test('should not display cards if none are selected', () => {
    const dataArray = [
      {location: 'AAA', data: {1: 0.5}, selected: false},
      {location: 'BBB', data: {1: 0.6}, selected: false},
      {location: 'CCC', data: {1: 0.7}, selected: false},
      {location: 'DDD', data: {1: 0.8}, selected: false}
    ];
    const wrapper = shallow(<Comparison dataArray={dataArray} />);

    expect(wrapper.find(Card).length).toBe(0);
  });

  test('should display one card if one card is selected', () => {
    const dataArray = [
      {location: 'AAA', data: {1: 0.5}, selected: false},
      {location: 'BBB', data: {1: 0.6}, selected: false},
      {location: 'CCC', data: {1: 0.7}, selected: false},
      {location: 'DDD', data: {1: 0.8}, selected: true}
    ];
    const wrapper = shallow(<Comparison dataArray={dataArray} />);

    expect(wrapper.find(Card).length).toBe(1);
  });
  
  test('should display the comparison and two cards when two cards are selected', () => {
    const mockFn = jest.fn();
    mockFn.mockReturnValueOnce({BBB: 0.6, DDD: 0.8, compared: 0.7});
    
    const dataArray = [
      {location: 'AAA', data: {1: 0.5}, selected: false},
      {location: 'BBB', data: {1: 0.6}, selected: true},
      {location: 'CCC', data: {1: 0.7}, selected: false},
      {location: 'DDD', data: {1: 0.8}, selected: true}
    ];
    const wrapper = shallow(<Comparison dataArray={dataArray}
      findAverage={mockFn}
      compareDistrictAverages={mockFn}/>);
      
      expect(wrapper.find(Card).length).toBe(2);
      expect(wrapper.find('.comparison-results').length).toBe(1);
    });

});
