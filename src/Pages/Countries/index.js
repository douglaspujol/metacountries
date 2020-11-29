import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

function Countries() {
  return (
    <Container>
      <ul>
        <li>
          <img src="https://restcountries.eu/data/bra.svg" alt="" srcSet="" />
          <h4>Name: Brazil</h4>
          <p>Capital: Brasília</p>
          <Link to="sobre">ver detalhes</Link>
        </li>
      </ul>
    </Container>
  );
}

export default Countries;
