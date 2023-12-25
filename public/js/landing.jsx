import './index.less'
import "./App.less";
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LendingPage from "./pages/lending/Lending";
import NullMain from './pages/nullMain/NullMain';
import Profile from './pages/profile/Profile';

function Landing() {
  return (
    <div className="Landing">
      <Routes>
        <Route path="/" element={<NullMain />} />
        <Route path="/landing" element={<LendingPage />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Landing />
      <Profile />
    </BrowserRouter>
  </React.StrictMode>,
)

