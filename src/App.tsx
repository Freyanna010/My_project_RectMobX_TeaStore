import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Main from "./page/main";
import { observer } from "mobx-react-lite";
import { Supplement, Tea } from "./models";
import teaStore from "./stores/teaStore";

const App = observer(() => {
  const { collectionSupplements, supplements, tea, setCollectionSupplements } =
    teaStore;
  const [mainTeaBasket, setMainTeaBasket] = useState<Tea[]>([]);
  const [mainSupplementsBasket, setMainSupplementsBasket] = useState<
    Supplement[]
  >([]);

  const addTeaManBasket = (id: string) => {
    const teaForManBasket = tea.find((t) => t.id === id);
    if (mainTeaBasket.length < 2) {
      setMainTeaBasket([{ ...teaForManBasket }]);
    }
  };
  const addSupplementManBasket = (id: string, collectionId: string) => {
    const arrIndigenous = supplements[collectionId];
    const indigenousForManBasket = arrIndigenous.find((i) => i.id === id);
    const indigenousOfManBasket = mainSupplementsBasket.every(
      (i) => i.id !== id
    );
    if (indigenousOfManBasket && mainSupplementsBasket.length < 7) {
      setMainSupplementsBasket([
        { ...indigenousForManBasket },
        ...mainSupplementsBasket,
      ]);
    } else {
      collectionSupplements.forEach((i) => {
        i.isEnough = true;
      });
      setCollectionSupplements([...collectionSupplements]);
    }
  };

  return (
    <div className="app">
      <Header />
      <div className="container-page">
        <Main
          collectionSupplements={collectionSupplements}
          supplements={supplements}
          tea={tea}
          addTeaMainBasket={addTeaManBasket}
          mainTeaBasket={mainTeaBasket}
          addSupplementMainBasket={addSupplementManBasket}
          mainSupplementsBasket={mainSupplementsBasket}
        />
      </div>
    </div>
  );
});
export default App;
