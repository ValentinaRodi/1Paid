import './index.less'
import "./App.less";
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LendingPage from "./pages/lending/Lending";
import Registration from "./components/registration/Registration";
import Newnik from "./components/newnik/Newnik";
import Recpass from "./components/recpass/Recpass";
import Authorization from "./components/authorization/Authorization";
import ReturnFunds from "./components/returnFunds/ReturnFunds";
import OrderСonfirm from "./components/orderСonfirm/OrderСonfirm";
import AddBalance from "./components/addBalance/AddBalance";
import OutputFunds from "./components/outputFunds/OutputFunds";
import AddProduct from "./components/addProduct/AddProduct";
import MakeBuy from "./components/makeBuy/MakeBuy";

function Landing() {
  return (
    <div className="Landing">
      <Routes>
        <Route path="/landing" element={<LendingPage />} />
        <Route path="Registration" element={<Registration />} />
        <Route path="Newnik" element={<Newnik />} />
        <Route path="RecPass" element={<Recpass />} />
        <Route path="Authorization" element={<Authorization />} />
        <Route path="ReturnFunds" element={<ReturnFunds />} />
        <Route path="OrderСonfirm" element={<OrderСonfirm />} />
        <Route path="AddBalance" element={<AddBalance />} />
        <Route path="OutputFunds" element={<OutputFunds />} />
        <Route path="AddProduct" element={<AddProduct />} />
        <Route path="/MakeBuy" element={<MakeBuy />} />
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

