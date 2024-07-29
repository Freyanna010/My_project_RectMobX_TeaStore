import { FC } from "react";
import "./App.css";
import Header from "./Components/Header";
import Main from "./page/main";

const App: FC =  () => {
  return (
    <div className="app">
      <Header />
      <div className="container-page">
        <Main />
      </div>
    </div>
  );
};
export default App;
