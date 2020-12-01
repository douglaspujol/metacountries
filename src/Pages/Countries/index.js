/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Container } from './styles';

function Countries() {
  const countriesList = useSelector(state => state.countries.countriesList);
  return (
    <Container>
      <ul>
        {countriesList.length > 0
          ? countriesList.map(country => (
            <li key={country._id}>
              <img src={country.flag.svgFile} alt="" srcSet="" />
              <h4>Name: {country.name}</h4>
              <p>
                Capital:{country.capital ? country.capital : 'Não possui.'}
              </p>
              <Link to={`detalhes/${country._id}`}>ver detalhes</Link>
            </li>
          ))
          : 'Carregando países'}
      </ul>
    </Container>
  );
}

export default Countries;
/**
 *
countriesList.map(results => (

 */
