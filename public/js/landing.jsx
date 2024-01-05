import './index.less'
import "./App.less";
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LendingPage from "./pages/lending/Lending";
import HeaderMain from './components/headerMain/HeaderMain';

function Landing() {
  return (
    <div className="Landing">
      <Routes>
        <Route path="/" element={<HeaderMain />} />
        <Route path="/landing" element={<LendingPage />} />
      </Routes>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Landing />
    </BrowserRouter>
  </React.StrictMode>,
)

