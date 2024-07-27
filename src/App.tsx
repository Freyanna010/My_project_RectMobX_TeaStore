import { useState } from "react";
import "./App.css";
import { v1 } from "uuid";
import Header from "./Components/Header";
import Main from "./page/main";
import { CollectionSupplements, Supplement, Tea } from "./models";

function App() {
  const [tea, setTea] = useState<Tea[]>([
    {
      id: v1(),
      name: "black tea",
      img: "./../public/indig/black_tea.jpg",
      isEnough: false,
      description: "This tea is black",
    },
    {
      id: v1(),
      name: "green tea",
      img: "./../public/indig/green_tea.jpg",
      isEnough: false,
      description: "This tea is green",
    },
    {
      id: v1(),
      name: "white tea",
      img: "./../public/indig/white_tea.jpg",
      isEnough: false,
      description: "This tea is white",
    },
  ]);

  const collSupplementsId1 = v1();
  const collSupplementsId2 = v1();
  const collSupplementsId3 = v1();
  const [collectionSupplements, setCollectionSupplements] = useState<
    CollectionSupplements[]
  >([
    { id: collSupplementsId1, name: "fruit supplements", isEnough: false },
    { id: collSupplementsId2, name: "herbal supplements", isEnough: false },
    { id: collSupplementsId3, name: "spice supplements", isEnough: false },
  ]);
  const [supplements, setSupplements] = useState<Record<string, Supplement[]>>({
    [collSupplementsId1]: [
      {
        id: v1(),
        name: "orange",
        img: "./../public/indig/orange.jpg",
      },
      { id: v1(), name: "cherry", img: "./../public/indig/cherry.jpg" },
      {
        id: v1(),
        name: "buckthorn",
        img: "./../public/indig/sea-buckthorn.jpg",
      },
      { id: v1(), name: "strawberry", img: "./../public/indig/strawberry.jpg" },
      { id: v1(), name: "apple", img: "./../public/indig/apple.jpg" },
    ],
    [collSupplementsId2]: [
      { id: v1(), name: "mint", img: "./../public/indig/black_tea.jpg" },
      { id: v1(), name: "rose", img: "./../public/indig/green_tea.jpg" },
      { id: v1(), name: "jasmine", img: "./../public/indig/white_tea.jpg" },
      { id: v1(), name: "sakura", img: "./../public/indig/white_tea.jpg" },
    ],
    [collSupplementsId3]: [
      { id: v1(), name: "cinnamon", img: "./../public/indig/black_tea.jpg" },
      { id: v1(), name: "badian", img: "./../public/indig/green_tea.jpg" },
      { id: v1(), name: "ginger", img: "./../public/indig/white_tea.jpg" },
    ],
  });

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
}

export default App;
