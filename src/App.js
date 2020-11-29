import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './Pages/Main/index';
import GlobalStyle from './styles/global';

function App() {
  return (
    <BrowserRouter>
      <Main />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
