import React from 'react';
import Form from './Form/index';
import Countrys from './Countries/index';
import { Container } from './styles';

function Aside() {
  return (
    <Container>
      <Form />
      <Countrys />
    </Container>
  );
}

export default Aside;
