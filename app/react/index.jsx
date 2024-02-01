import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.less';

import "./App.less";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HeaderMain from './components/headerMain/HeaderMain';
import Profile from './pages/profile/Profile';
import ProfileEdit from './pages/profile/Edit';
import Main from './pages/main/Main';
import Catalog from './components/catalog/Catalog';
import LeftMenu from './components/leftMenu/LeftMenu';
import LayoutColRow from './components/LayoutColRow';
import {useState, useEffect} from 'react';
import {createRoot} from "react-dom/client";


function App() {

    return (
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/catalog" element={<Catalog/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/edit" element={<Settings/>}/>
        </Routes>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>,
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
