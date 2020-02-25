import React from 'react';
import './country.styles.css';

export const Country = props => {
  return (
    <div className='country-container'>
    <img alt='flags' src={`https://www.countryflags.io/${props.country.alpha2Code}/flat/64.png`} />
      <h2>{props.country.name}</h2>
    </div>

  );
}