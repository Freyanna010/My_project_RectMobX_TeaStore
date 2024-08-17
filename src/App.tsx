import { FC } from "react";
import "./App.css";
import Header from "./Components/Header";
import Main from "./page/main";
import {Route, Routes } from "react-router-dom";
import UserBasket from "./page/userBasket";
import About from "./page/about";
// TODO:выдает ошибку
// import {animateScroll} from "react-scroll"//
import Login from "./page/login";


const App: FC =  () => {
  return (
    <div className="app">
      <Header />
      <div className="container-page">
        {/*TODO: выдает ошибку*/}
        <div className="buttonUp">
          {/* <button onClick={() => animateScroll.scrollToTop()}>⏫</button> */}
        </div>

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/basket" element={<UserBasket />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
};
export default App;
