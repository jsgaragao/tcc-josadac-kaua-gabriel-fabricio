import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Produto from './produtos';
import Cabecalho from './cabecalho';
import Produtos from './soproduto';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Produto/>}/>
      <Route path='/cabecalho' element={<Cabecalho/>}/>
      <Route path='/produto' element={<Produtos/>}/>
     
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

