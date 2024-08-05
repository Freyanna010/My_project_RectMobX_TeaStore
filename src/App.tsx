import { FC } from "react";
import "./App.css";
import Header from "./Components/Header";
import Main from "./page/main";
import {Route, Routes } from "react-router-dom";
import UserBasket from "./page/userBasket";
import About from "./page/about";


const App: FC =  () => {
  return (
    <div className="app">
      <Header />
      <div className="container-page">

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/basket" element={<UserBasket />} />
          <Route path="/about" element={<About />} />
          //TODO: modal or page
          {/* <Route path="/basket" element={<Login />} /> */}
        </Routes>
      </div>
    </div>
  );
};
export default App;
