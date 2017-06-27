export default class DistrictRepository {
  constructor(dataset) {
    this.data = this.scrubData(dataset)
  }

  findAllMatches(input) {
    const locationsArray = Object.keys(this.data).map( location => {
      return {location: location, data: this.data[location]};
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

  scrubData(data) {
    return data.reduce( (acc, elem) => {
      elem.Location = elem.Location.toUpperCase();
      acc[elem.Location] = Object.assign({}, acc[elem.Location], { [elem.TimeFrame]: ( Math.round(1000 * elem.Data)/1000 || 0 ) });
      return acc;
    }, {});
  }
}
