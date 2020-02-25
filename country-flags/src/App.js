import React, { Component } from "react";
import './App.css'
import { CountryList } from './components/countryList/countryList.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      countries: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(response => response.json())
      .then(countryApi => this.setState({ countries: countryApi }))
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { countries, searchField } = this.state;
    const filteredCountries = countries.filter(country =>
      country.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className='App'>
        <h1><i class="fas fa-flag"></i> Country Flags</h1>
        <SearchBox
          placeholder='Search flags'
          handleChange={this.handleChange}
        />
        <CountryList countries={filteredCountries} />
      </div>
    )
  }
}


export default App;

