import * as config from "../config.json";

export class Country {
    

    //Get all countries
     getCountries(){
        return config.countryList;
    }
}