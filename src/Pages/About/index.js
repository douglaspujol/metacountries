import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Container } from './styles';

function About() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/');
  }
  function handleEdit() {
    navigate('/editar');
  }

  return (
    <Container>
      <h1>Brazil</h1>
      <img src="https://restcountries.eu/data/bra.svg" alt="" srcSet="" />
      <p>Capital: Brasília</p>
      <p>Area: 8515767</p>
      <p>Poulation: 206135893</p>
      <p>topLevelDomains: .br</p>
      <div className="actions">
        <button type="button" onClick={handleClick}>
          Voltar
        </button>
        <button type="button" onClick={handleEdit}>
          Editar
        </button>
      </div>
    </Container>
  );
}

export default About;
