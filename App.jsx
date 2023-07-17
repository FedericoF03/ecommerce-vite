import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "../Routes/Register";
import Home from "../Routes/Home/Home";
import Login from "../Routes/login";
import AuthenticationML from "../components/AuthenticationML";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/authentication/login" element={<Login />} />
          <Route path="/auth/authorization" element={<AuthenticationML/>} />
          <Route path="/authentication/register" element={<Register />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
