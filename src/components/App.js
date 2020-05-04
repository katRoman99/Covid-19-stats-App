import React from 'react';
import axios from 'axios';
import './App.scss';
import CountriesTable from './CountriesTable/CountriesTable'
import Summary from './Summary/Summary';


class App extends React.Component {

  constructor(props) {
    super();
    this.state = {
      FETCHED_DATA: {
        Global: {},
        Countries: []
      },
      countries: [],
      global: {},
      countriesSorted: false,
      totalConfirmedSorted: false,
      totalDeathsSorted: false,
      totalRecoveredSorted: false
    };
    this.filterTiles = this.filterTiles.bind(this);
    this.sortCountries = this.sortCountries.bind(this);
    this.sortTotalConfirmed= this.sortTotalConfirmed.bind(this);
    this.sortTotalDeaths= this.sortTotalDeaths.bind(this);
    this.sortTotalRecovered= this.sortTotalRecovered.bind(this);
  }

  filterTiles(e) {
    const filteredCountries = this.state.FETCHED_DATA.Countries.filter(country => country.Country.toLowerCase().includes(e.target.value.toLowerCase()));
    this.setState({
      countries: filteredCountries
    })
  }

  sortCountries() {
    var sortedCountries;
    if (this.state.countriesSorted === false)
      sortedCountries = this.sortAlph(this.state.FETCHED_DATA.Countries, 1);
    else
      sortedCountries = this.sortAlph(this.state.FETCHED_DATA.Countries, 0);
    
    this.setState({
      countries: sortedCountries,
      totalConfirmedSorted: false,
      totalDeathsSorted: false,
      totalRecoveredSorted: false,
      countriesSorted: !this.state.countriesSorted
    })
  }

  sortAlph(arr, asc) {
    var countries = arr;

    var n = countries.length
    var temp;
  
    // Traverse through all array elements 
    for ( var i=0; i< n-1; i++) {
  
        // Last i elements are already in place 
        for (var j=0; j < n-i-1; j++) {
  
            // traverse the array from 0 to n-i-1 
            // Swap if the element found is greater 
            // than the next element
            if(asc === 1) {
              if (countries[j].Country.toLowerCase() > countries[j+1].Country.toLowerCase()) {
                temp = countries[j];
                countries[j] = countries[j+1];
                countries[j+1] = temp;
              }
            }
            else if(asc === 0) {
              if (countries[j].Country.toLowerCase() < countries[j+1].Country.toLowerCase()) {
                temp = countries[j+1];
                countries[j+1] = countries[j];
                countries[j] = temp;
              }
            }
        }
      }
      return countries;
  }

  sort(arr, asc, dataToSort) {
    var countries = arr;

    var n = countries.length;
    var temp;
  
    // Traverse through all array elements 
    for ( var i=0; i< n-1; i++) {
  
        // Last i elements are already in place 
        for (var j=0; j < n-i-1; j++) {
  
            // traverse the array from 0 to n-i-1 
            // Swap if the element found is greater 
            // than the next element
            if(asc===1) {
              if (countries[j][dataToSort] > countries[j+1][dataToSort]) {
                temp = countries[j];
                countries[j] = countries[j+1];
                countries[j+1] = temp;
              }
            }
            else if(asc===0) {
              if (countries[j][dataToSort] < countries[j+1][dataToSort]) {
                temp = countries[j+1];
                countries[j+1] = countries[j];
                countries[j] = temp;
              }
            }
        }
    }
    return countries;
  }

  sortTotalConfirmed() {
    var sortedCountries;
    if (this.state.totalConfirmedSorted === false)
      sortedCountries = this.sort(this.state.FETCHED_DATA.Countries, 1, "TotalConfirmed");
    else
      sortedCountries = this.sort(this.state.FETCHED_DATA.Countries, 0, "TotalConfirmed");
    this.setState({
      countries: sortedCountries,
      countriesSorted: false,
      totalDeathsSorted: false,
      sortTotalRecovered: false,
      totalConfirmedSorted: !this.state.totalConfirmedSorted
    })
  }

  sortTotalDeaths() {
    var sortedCountries;
    if (this.state.totalDeathsSorted === false)
      sortedCountries = this.sort(this.state.FETCHED_DATA.Countries, 1, "TotalDeaths");
    else
      sortedCountries = this.sort(this.state.FETCHED_DATA.Countries, 0, "TotalDeaths");
    this.setState({
      countries: sortedCountries,
      countriesSorted: false,
      totalConfirmedSorted: false,
      totalRecoveredSorted: false,
      totalDeathsSorted: !this.state.totalDeathsSorted
    })
  }

  sortTotalRecovered() {
    var sortedCountries;
    if (this.state.totalRecoveredSorted === false)
      sortedCountries = this.sort(this.state.FETCHED_DATA.Countries, 1, "TotalRecovered");
    else
      sortedCountries = this.sort(this.state.FETCHED_DATA.Countries, 0, "TotalRecovered");
    this.setState({
      countries: sortedCountries,
      countriesSorted: false,
      totalConfirmedSorted: false,
      totalDeathsSorted: false,
      totalRecoveredSorted: !this.state.totalRecoveredSorted
    })
  }

  componentDidMount(){
    axios.get('https://api.covid19api.com/summary').then( response => {
      this.setState({
        FETCHED_DATA: response.data,
        countries: response.data.Countries,
        global: response.data.Global
      })
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          #STAYHOME
        </header>
        <div className="content">
          <Summary
            global={this.state.global}
            filterTiles={this.filterTiles}
          />
          <CountriesTable
            countries={this.state.countries}
            sortCountries={this.sortCountries}
            sortTotalConfirmed={this.sortTotalConfirmed}
            sortTotalDeaths={this.sortTotalDeaths}
            sortTotalRecovered={this.sortTotalRecovered}
          />
        </div>        
      </div>
    )
  }
}

export default App;
