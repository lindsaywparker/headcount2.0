export default class DistrictRepository {
  constructor(dataset) {
    // this.camelCaseData = dataset.map( elem => {
    //   let keys = Object.keys(elem).map( key => {
    //     return key;
    //   });
    //   
    //   // console.log(keys);
    //   return {};
    // });
    
    this.data = dataset.reduce( (acc, elem) => {
        acc[elem.Location] = Object.assign({}, acc[elem.Location], { [elem.TimeFrame]: elem.Data });
      return acc;
    }, {});
    
  }

}
