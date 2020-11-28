import React from 'react';

import { Container } from './styles';

function Edit() {
  return (
    <Container>
      <div>
        <h1>Brazil</h1>
        <img src="https://restcountries.eu/data/bra.svg" alt="" srcSet="" />
      </div>
      <form>
        <label htmlFor="capital">
          Capital
          <input id="capital" name="capital" value="Brasília" />
        </label>
        <label htmlFor="area">
          Area
          <input id="area" name="area" value="8515767" />
        </label>
        <label htmlFor="population">
          Population
          <input id="population" name="population" value="206135893" />
        </label>
        <label htmlFor="topLevelDomains">
          topLevelDomains
          <input id="topLevelDomains" name="topLevelDomains" value=".br" />
        </label>
        <button type="button">Salvar</button>
        <button type="button">Voltar</button>
      </form>
    </Container>
  );
}

export default Edit;
