import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Countries from '../Pages/Countries/index';
import About from '../Pages/About/index';
import Edit from '../Pages/Edit/index';
import Page404 from '../Pages/Page404/index';

function WrapperRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="sobre" element={<About />} />
        <Route path="editar" element={<Edit />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default WrapperRoutes;
