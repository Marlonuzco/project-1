import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Dashboard from '../pages/Dasboard';



function Rutas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Dashboard />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Rutas;
