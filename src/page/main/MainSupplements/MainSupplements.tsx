import classes from "./MainSupplements.module.css";
import CardSupplements from "./CardSupplements/CardSupplements";
import teaStore from "../../../stores/teaStore";
import { observer } from "mobx-react-lite";
import { FC } from "react";
import CardContainer from "../../../Components/CardContainer";

const MainSupplements: FC = () => {
  return (
    <div>
      {teaStore.collectionSupplements.map((collection) => {
        const supplementsForCard = teaStore.supplements[collection.id];
        return (
          <div key={collection.id} id={collection.idScroll}>
            {collection.isEnough && <div>IS ENOUGH!</div>}
            <div className={collection.isEnough ? classes.isEnough : ""}>
              <CardContainer>
                <CardSupplements
                  supplementsForCard={supplementsForCard}
                  id={collection.id}
                  isEnough={collection.isEnough}
                  name={collection.name}
                />
              </CardContainer>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default observer(MainSupplements);
