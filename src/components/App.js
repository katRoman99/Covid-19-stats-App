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
  }

  filterTiles(e) {
    const filteredCountries = this.state.FETCHED_DATA.Countries.filter(country => country.Country.toLowerCase().includes(e.target.value.toLowerCase()));
    this.setState({
      countries: filteredCountries,
      countriesSorted: false,
      totalConfirmedSorted: false,
      totalDeathsSorted: false,
      totalRecoveredSorted: false
    })
  }

  sortCountries() {
    var sortedCountries;
    if (this.state.countriesSorted)
      sortedCountries = this.state.FETCHED_DATA.Countries;
    else
      sortedCountries = this.sortAlphAsc(this.state.FETCHED_DATA.Countries);
    
    this.setState({
      countries: sortedCountries,
      countriesSorted: !this.state.countriesSorted
    })
  }

  sortAlphAsc(arr) {
    var countries = arr;

    var n = countries.length
  
    // Traverse through all array elements 
    for ( var i=0; i< n-1; i++) {
  
        // Last i elements are already in place 
        for (var j=0; j < n-i-1; j++) {
  
            // traverse the array from 0 to n-i-1 
            // Swap if the element found is greater 
            // than the next element 
            if (countries[j].Country.toLowerCase() > countries[j+1].Country.toLowerCase()) {
              var temp = countries[j];
              countries[j] = countries[j+1];
              countries[j+1] = temp;
            }
        }
      }
      return countries;
  }

  sortAsc(arr) {
    var countries = arr;

    var n = countries.length
  
    // Traverse through all array elements 
    for ( var i=0; i< n-1; i++) {
  
        // Last i elements are already in place 
        for (var j=0; j < n-i-1; j++) {
  
            // traverse the array from 0 to n-i-1 
            // Swap if the element found is greater 
            // than the next element 
            if (countries[j].TotalConfirmed > countries[j+1].TotalConfirmed) {
              var temp = countries[j];
              countries[j] = countries[j+1];
              countries[j+1] = temp;
            }
        }
      }
      return countries;
  }

  sortTotalConfirmed() {
    const sortedCountries = this.sortAsc(this.state.FETCHED_DATA.Countries); 
    this.setState({
      countries: sortedCountries,
      countriesSorted: false
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
          />
        </div>        
      </div>
    )
  }
}

export default App;
