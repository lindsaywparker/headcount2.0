export default class DistrictRepository {
  constructor(dataset) {
    this.data = this.scrubData(dataset)
  }

  findAllMatching() {
    const allResults = [];
    return allResults;
  }

  findByName(input) {
    if(!input) {
      return undefined;
    }

    input = input.toUpperCase();

    if(!this.data[input]) {
      return undefined;
    }

    const byNameResults = Object.assign({}, {location: input.toUpperCase()});
    return byNameResults;
  }

  scrubData(data) {
    return data.reduce( (acc, elem) => {
      elem.Location = elem.Location.toUpperCase();
        acc[elem.Location] = Object.assign({}, acc[elem.Location], { [elem.TimeFrame]: elem.Data });
      return acc;
    }, {});
  }
}
