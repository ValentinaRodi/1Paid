import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LendingPage from "./pages/lending/Lending";
import Registration from "./components/registration/Registration";
import NewPass from "./components/newpass/Newpass";
import Newnik from "./components/newnik/Newnik";
import Recpass from "./components/recpass/Recpass";
import Authorization from "./components/authorization/Authorization";
import ReturnFunds from "./components/returnFunds/ReturnFunds";
import OrderСonfirm from "./components/orderСonfirm/OrderСonfirm";
import AddBalance from "./components/addBalance/AddBalance";
import OutputFunds from "./components/outputFunds/OutputFunds";
import AddProduct from "./components/addProduct/AddProduct";
import MakeBuy from "./components/makeBuy/MakeBuy";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LendingPage />} />
        <Route path="MainPage" element={<MainPage />} />
        <Route path="Registration" element={<Registration />} />
        <Route path="NewPass" element={<Newpass />} />
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

export default App;

