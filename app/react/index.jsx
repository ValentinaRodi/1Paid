import './index.less';

import "./App.less";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Router>
  </React.StrictMode>
)

/* if (document.querySelector("div#header")) {
  const header = document.querySelector("div#header");
  ReactDOM.createRoot(header).render(<BrowserRouter><HeaderMain /></BrowserRouter>);
}

if (document.querySelector("div#left-menu")) {
  const leftMenu = document.querySelector("div#left-menu");
  ReactDOM.createRoot(leftMenu).render(<LeftMenu />);
}

if (document.querySelector("div#layoutColRow")) {
  const leftMenu = document.querySelector("div#layoutColRow");
  ReactDOM.createRoot(leftMenu).render(<LayoutColRow />);
} */
