import DistrictRepository from '../../src/helper.js';
import kinderData from '../../data/kindergartners_in_full_day_program.js';
import React from 'react';
import CardList from '../../src/CardList';
import Card from '../../src/Card';
import App from '../../src/App';
import Filter from '../../src/Filter';
import Start from '../../src/Start';
import Comparison from '../../src/Comparison';
import { shallow, mount } from 'enzyme';

describe('DistrictRepository iteration 2', () =>  {
  const district = new DistrictRepository(kinderData);
  const dataArray = district.findAllMatches();

  test('Should render 181 cards by default', () => {
    const wrapper = shallow(<CardList dataArray={dataArray}/>)

    expect(wrapper.find(Card).length).toEqual(181)
  });

  test('Card should have a title and table', () => {
    const districtData = dataArray[0];

    const wrapper = shallow(<Card location={districtData.location}
                                  data={districtData.data}
                                />)

    expect(wrapper.find('.district-title').text()).toEqual('COLORADO');
    expect(wrapper.find('table').length).toBe(1);
  })

  test('filter should render', () => {
    const wrapper = shallow(<App />)

    expect(wrapper.find(Filter).length).toBe(1);
  });

  test('filter should render an input and button', () => {
    const wrapper = shallow(<Filter />)

    expect(wrapper.find('[type="text"]').length).toBe(1);
    expect(wrapper.find('[type="button"]').length).toBe(1);
  });

  test('Start should render', () => {
    const wrapper = shallow(<App />)

    expect(wrapper.find(Start).length).toBe(1);
  });

  test('Comparison should render', () => {
    const wrapper = shallow(<App />)

    expect(wrapper.find(Comparison).length).toBe(1);
  });

  test('App should have a default state', () => {
    const wrapper = shallow(<App />);
    const expectedState = {
      dataArray: district.findAllMatches()
    }

    expect(wrapper.state()).toEqual(expectedState);
  });
});
