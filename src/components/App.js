import React from 'react';
import './App.scss';
import CountriesTable from './CountriesTable/CountriesTable'
import API_DATA from '../mocks/API_DATA.json';


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
          <CountriesTable
            countries={this.state.countries}
          />
        </div>        
      </div>
    )
  }
}

export default App;
