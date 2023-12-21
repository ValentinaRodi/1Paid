import React from 'react'
import ReactDOM from 'react-dom/client'
import Landing from './landing.jsx'
import './index.less'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Landing />
    </BrowserRouter>
  </React.StrictMode>
);
