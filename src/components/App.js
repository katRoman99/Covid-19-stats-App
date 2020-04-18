import React from 'react';
import './App.scss';
import CountriesTable from './CountriesTable/CountriesTable'
import API_DATA from '../mocks/API_DATA.json';
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
      global: {}
    };
    this.filterTiles = this.filterTiles.bind(this);
  }

  filterTiles(e) {
    const filteredCountries = this.state.FETCHED_DATA.Countries.filter(country => country.Country.toLowerCase().includes(e.target.value.toLowerCase()));
    this.setState({
      countries: filteredCountries
    })
  }

  componentDidMount(){
    this.setState({
      FETCHED_DATA: API_DATA,
      countries: API_DATA.Countries,
      global: API_DATA.Global
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
          />
        </div>        
      </div>
    )
  }
}

export default App;
