import React from 'react';
import ListCountries from '../../Components/Countries/index';
import About from '../About/index';
import Edit from '../Edit/index';
import Aside from '../../Components/Aside/index';
import { Container } from './styles';
import Header from '../../Components/Header/index';

function Page() {
  return (
    <Container>
      <Aside />
      <div className="rotas">
        <Header />
        <ListCountries />
        <About />
        <Edit />
      </div>
    </Container>
  );
}

export default Page;
