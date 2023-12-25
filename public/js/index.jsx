import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.less'

import "./App.less";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NullMain from './pages/nullMain/NullMain';
import Profile from './pages/profile/Profile';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NullMain />} />
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
