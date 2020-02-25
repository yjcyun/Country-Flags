import React from 'react';
import './countryList.styles.css';
import { Country } from '../country/country.component';

export const CountryList = props => {
  return (
    <div className='country-list'>
      {props.countries.map(country => (
        <Country
          key={country.alpha2Code}
          country={country} />
      ))}
    </div>
  )
}
