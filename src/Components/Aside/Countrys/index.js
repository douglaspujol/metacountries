import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container } from './styles';

function Countrys() {
  return (
    <Container>
      <h5>Seus países</h5>

      <nav>
        <NavLink to="sobre">
          <img src="https://restcountries.eu/data/bra.svg" alt="" srcSet="" />
          <h4>Brazil</h4>
        </NavLink>
      </nav>
    </Container>
  );
}

export default Countrys;
