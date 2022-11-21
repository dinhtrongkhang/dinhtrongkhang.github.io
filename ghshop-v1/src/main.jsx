import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Baby from './pages/baby/Baby';
import Women from './pages/women/Women';
import Men from './pages/men/Men';
import New from './pages/news/New';
import Layout from './components/layout/Layout';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<Home />} />
          <Route path='baby' element={<Baby />} />
          <Route path='women' element={<Women />} />
          <Route path='men' element={<Men />} />
          <Route path='news' element={<New />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);