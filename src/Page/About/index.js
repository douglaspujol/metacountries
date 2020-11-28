import React from 'react';

import { Container } from './styles';

function About() {
  return (
    <Container>
      <h1>Brazil</h1>
      <img src="https://restcountries.eu/data/bra.svg" alt="" srcSet="" />
      <p>Capital: Brasília</p>
      <p>Area: 8515767</p>
      <p>Poulation: 206135893</p>
      <p>topLevelDomains: .br</p>
      <div className="actions">
        <button type="button">Voltar</button>
        <button type="button">Adicionar</button>
      </div>
    </Container>
  );
}

export default About;
