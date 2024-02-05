import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import uuid from 'react-uuid';

import Profile from '../pages/profile/Profile';
import Main from '../pages/main/Main';
import Catalog from '../pages/catalog/Catalog';
import Settings from '../pages/settings/Settings';
import {PrivateRoute} from '../components/PrivateRoute';
import Authorization from '../components/authorization/Authorization';
import Card from '../pages/card/Card';


export const useRoutes = () => {
  const [games, setGames] = useState('');

  useEffect(() => {
  
    fetch("/game/get", {
      method: "GET",
      headers: {
          "X-Requested-With": "XMLHttpRequest",
          "Content-Type": "application/json",
      },
    })
    .then((res) => {
        return res.json();
    })
    .then((data) => {
      setGames(Object.values(data.games));
    })
    .catch((error) => {
        console.log(error);
    });

  }, []);

  return (
    <Routes>
      <Route index element={<Main />} />
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Authorization />} />
      <Route path='/catalog/:game?/:category' element={<Catalog />} />
      <Route path='/catalog/:game?/:category/:card' element={<Card />} />
      <Route element={<PrivateRoute />}>
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/edit" element={<Settings />} />
      </Route>
    </Routes> 
  );
}

export default useRoutes;