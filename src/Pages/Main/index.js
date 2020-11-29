import React from 'react';

import Aside from '../../Components/Aside/index';
import { Container } from './styles';
import Header from '../../Components/Header/index';
import WrapperRoutes from '../../Routes/Routes';

function Page() {
  return (
    <Container>
      <Aside />
      <div className="rotas">
        <Header />
        <WrapperRoutes />
      </div>
    </Container>
  );
}

export default Page;
