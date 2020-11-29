import React from 'react';
import Input from '../../Input/index';

import { Container } from './styles';

function Form() {
  function onChange(e) {
    console.log(e.target.value);
    console.log('EFETUAR BUSCA API');
  }
  return (
    <Container>
      <h1>PESQUISAR</h1>
      <Input
        id="buscar"
        label="Digite o nome do seu pais."
        type="text"
        placeholder="termo da busca (ex: Brazil)"
        onChange={onChange}
      />
    </Container>
  );
}

export default Form;
