// routes.js
import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header';
import Home from './routes/Home';
import Loja from './routes/Loja';
import Contato from './routes/Contato';

const AppRoutes = () => { // Mudamos o nome aqui
  return (
    <BrowserRouter>
      <Header />
      <Routes> {/* Este Routes é o da biblioteca */}
        <Route path="/" element={<Home />} />
        <Route path="/Loja" element={<Loja />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes; // Exporta com o novo nome