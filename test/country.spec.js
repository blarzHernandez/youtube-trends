const expect = require('chai').expect;
const {Country} = require("../services/country");
const getCountries = new Country();

describe("Contry Testing Set", () => {
    //Get list of countries
     it("Get all countries", () => {
         const countriesList = getCountries.getCountries();
         expect(typeof countriesList).to.equal('object');
     });
});
