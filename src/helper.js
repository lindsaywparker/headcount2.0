export default class DistrictRepository {
  constructor(dataset) {
    this.data = this.scrubData(dataset);
  }

  findAllMatches(input) {
    const locationsArray = Object.keys(this.data).map( location => {
      return {location: location, data: this.data[location], average: this.findAverage(location), selected: false};
    });
    
    if(!input) {
      return locationsArray;
    }

    let filteredArray = locationsArray.filter( elem => {
      return elem.location.includes(input.toUpperCase());
    });

    return filteredArray;
  }

  findByName(input) {
    if(!input) {
      return undefined;
    }

    input = input.toUpperCase();

    if(!this.data[input]) {
      return undefined;
    }
    
    const byNameResults = Object.assign({}, {location: input}, {data: this.data[input]});

    return byNameResults;
  }

  findAverage(location) {
    let yearlySum = Object.keys(this.data[location]).reduce( (sum, year) => {
      return sum + this.data[location][year];
    }, 0);
    const count = Object.keys(this.data[location]).length;
    const average = Math.round(1000 * (yearlySum / count)) / 1000;
    return average;
  }

  compareDistrictAverages(location1, location2) {
    location1 = location1.toUpperCase();
    location2 = location2.toUpperCase();
    
    const loc1Avg = this.findAverage(location1);
    const loc2Avg = this.findAverage(location2);
    const compAvg = Math.round(1000 * (loc1Avg / loc2Avg)) / 1000;
    
    return {[location1]: loc1Avg, [location2]: loc2Avg, compared: compAvg};
  }

  scrubData(data) {
    return data.reduce( (acc, elem) => {
      elem.Location = elem.Location.toUpperCase();
      acc[elem.Location] = Object.assign({},
                            acc[elem.Location],
                            { [elem.TimeFrame]: ( Math.round(1000 * elem.Data)/1000 || 0 ) },
                            );
      return acc;
    }, {});
  }
}
