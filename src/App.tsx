import { FC } from "react";
import "./App.css";
import Header from "./Components/Header";
import {Route, Routes } from "react-router-dom";
import UserBasket from "./page/userBasket";
import About from "./page/about";
import {animateScroll} from "react-scroll"//
import Login from "./page/login";
import Home from "./page/catalog";
import Catalog from "./page/catalog";


const App: FC =  () => {
  return (
    <div className="app">
      <Header />
      <div className="container-page">
        <div className="buttonUp">
          <button onClick={() => animateScroll.scrollToTop()}>⏫</button>
        </div>
        <Routes>
          <Route path="/" element={<Catalog />} />
          <Route path="/basket" element={<UserBasket />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
};
export default App;
