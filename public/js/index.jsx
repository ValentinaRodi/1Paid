import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.less'

import "./App.less";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderMain from './components/headerMain/HeaderMain';
import Profile from './pages/profile/Profile';
import Cards from './components/cards/Cards';
import Catalog from './components/catalog/Catalog';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<Cards />} /> */}
        <Route path="/" element={<Catalog />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)

if (document.querySelector("div#header")) {
    const rootEl = document.querySelector("div#header");
    ReactDOM.createRoot(rootEl).render(<HeaderMain />);
}


