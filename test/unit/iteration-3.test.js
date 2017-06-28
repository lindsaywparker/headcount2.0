import DistrictRepository from '../../src/helper.js';
import kinderData from '../../data/kindergartners_in_full_day_program.js';

describe('DistrictRepository iteration 3', () =>  {
  const district = new DistrictRepository(kinderData);

  test('search should filter ', () => {
    expect(district.findAllMatches().length).toBe(181);
  });

});
