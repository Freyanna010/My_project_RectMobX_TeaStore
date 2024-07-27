import "./App.css";
import Header from "./Components/Header";
import Main from "./page/main";
import { observer } from "mobx-react-lite";
import teaStore from "./stores/teaStore";

const App = observer(() => {
  const { collectionSupplements, supplements, tea } = teaStore;

  return (
    <div className="app">
      <Header />
      <div className="container-page">
        <Main
          collectionSupplements={collectionSupplements}
          supplements={supplements}
          tea={tea}
          // addTeaMainBasket={addTeaManBasket}
          // mainTeaBasket={mainTeaBasket}
          // addSupplementMainBasket={addSupplementManBasket}
          // mainSupplementsBasket={mainSupplementsBasket}
        />
      </div>
    </div>
  );
});
export default App;
