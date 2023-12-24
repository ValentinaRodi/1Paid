import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.less'

import "./App.less";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NullMain from './pages/nullMain/NullMain';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NullMain />} />

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
