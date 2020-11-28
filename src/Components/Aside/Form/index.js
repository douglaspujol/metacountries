import React from 'react';

import { Container } from './styles';

function Form() {
  return (
    <Container>
      <h1>PESQUISAR</h1>
      <p>O que desaja buscar?</p>
      <form>
        <input type="text" placeholder="termo da busca (ex: Brazil)" />
        <button type="submit">PESQUISAR</button>
      </form>
    </Container>
  );
}

export default Form;
