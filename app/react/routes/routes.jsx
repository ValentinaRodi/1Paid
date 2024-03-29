import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import uuid from 'react-uuid';
import Profile from '../pages/profile/Profile';
import Main from '../pages/main/Main';
import Catalog from '../pages/catalog/Catalog';
import Settings from '../pages/settings/Settings';
import {PrivateRoute} from '../components/PrivateRoute';
import Authorisation from '../components/authorisation/Authorisation';
import Card from '../pages/cardTovar/CardTovar';
import Tab from '../pages/tab/Tab';
import HistoryViews from '../pages/historyViews/HistoryViews';
import HistorySales from '../pages/historySales/HistorySales';
import TopUsers from '../pages/top-users/TopUsers';
import Guarantees from '../pages/guarantees/Guarantees';
import Feedbacks from '../pages/feedbacks/Feedbacks';
import RandomItems from '../pages/randomItems/RandomItems';
import MyNotifications from '../pages/myNotifications/MyNotifications';
import MyAchievements from '../pages/myAchievements/MyAchievements';
import Refs from '../pages/refs/Refs';
import MyTovars from '../pages/myTovars/MyTovars';
import MyFinance from '../pages/myFinance/MyFinance';
import OrderTable from '../pages/orderTable/OrderTable';
import TechSupport from '../pages/techSupport/TechSupport';
import Faq from '../pages/faq/Faq';
import MyMessages from '../pages/myMessages/MyMessages';
import GiveAway from '../pages/giveaway/GiveAway';
import Roulette from '../pages/roulette/Roulette';
import CardTovar from '../pages/cardTovar/CardTovar';
import Forum from '../pages/forum/Forum';
import Contacts from '../pages/contacts/Сontacts';

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
      <Route path="/login" element={<Authorisation />} />
      <Route path='/catalog/:game?/:category' element={<Catalog />} />
      <Route path='/catalog/:game?/:category/:card' element={<Card />} />
      <Route path='/top_users' element={<TopUsers />} />
      <Route path='/guarantees' element={<Guarantees />} />
      <Route path='/feedbacks' element={<Feedbacks />} />
      <Route path='/random-items' element={<RandomItems />} />
      <Route path='/faq' element={<Faq />} />
      <Route path='/catalog/Warface/1-account' element={<CardTovar />} />
      <Route path='/contacts' element={<Contacts />} />
      
      <Route element={<PrivateRoute />}>
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/edit" element={<Settings />} />
        <Route path="/tab" element={<Tab />} />
        <Route path="/history_views" element={<HistoryViews />} />
        <Route path="/history_sales" element={<HistorySales />} />
        <Route path='/my-achievements' element={<MyAchievements />} />
        <Route path='/my-notifications' element={<MyNotifications />} />
        <Route path='/my-tovars' element={<MyTovars />} />
        <Route path='/my-finance' element={<MyFinance />} />
        <Route path='/refs' element={<Refs />} />
        <Route path='/order-table' element={<OrderTable />} />
        <Route path='/tech-support' element={<TechSupport />} />
        <Route path='/my-messages' element={<MyMessages />} />
        <Route path='/giveaway' element={<GiveAway />} />
        <Route path='/roulette' element={<Roulette />} />
        <Route path='/forum' element={<Forum />} />
      </Route>
    </Routes> 
  );
}

export default useRoutes;