import classes from "./MainSupplements.module.css";
import CardSupplements from "./CardSupplements/CardSupplements";
import teaStore from "../../../stores/teaStore";
import { observer } from "mobx-react-lite";
import { FC } from "react";
import Cards from "../../../Components/Cards";

const MainSupplements: FC = () => {
  return (
    <div>
      {teaStore.collectionSupplements.map((collection) => {
        const supplementsForCard = teaStore.supplements[collection.id];
        return (
          <div key={collection.id} id={collection.idScroll}>
        
            {collection.isEnough && <div>IS ENOUGH!</div>}
            <div className={collection.isEnough ? classes.isEnough : ""}>
              <Cards>
                <CardSupplements
                  supplementsForCard={supplementsForCard}
                  id={collection.id}
                  isEnough={collection.isEnough}
                  name =  {collection.name}
                />
              </Cards>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default observer(MainSupplements);
