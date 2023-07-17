import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Routes/Register";
import Home from "./Routes/Home";
import Login from "./Routes/login";
import AuthenticationML from "./components/AuthenticationML";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Fragment } from "react";
import Product from "./Routes/Product";
import Cart from "./Routes/Cart";
import Fav from "./Routes/Fav";
import History from "./Routes/History";
import List from "./Routes/List";
import Options from "./Routes/Options";
import Bought from "./Routes/Bought";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register/meli" element={<AuthenticationML />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product/:product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/bought" element={<Bought />} />
          <Route path="/fav" element={<Fav />} />
          <Route path="/history" element={<History />} />
          <Route path="/categories/:category" element={<List />} />
          <Route path="/user/ajust" element={<Options />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
