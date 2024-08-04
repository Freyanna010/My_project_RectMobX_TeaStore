import classes from "./MainSupplements.module.css";
import CardSupplements from "./CardSupplements/CardSupplements";
import teaStore from "../../../stores/teaStore";
import { observer } from "mobx-react-lite";
import { FC } from "react";

const MainSupplements: FC = () => {
  return (
    <div>
      {teaStore.collectionSupplements.map((collection) => {
        const supplementsForCard = teaStore.supplements[collection.id];
        return (
          <div className={classes.indigenous_card} key={collection.id}>
            <div className={classes.tittle}>
              <h3>Choose a {collection.name}</h3>
            </div>
            {collection.isEnough && <div>IS ENOUGH!</div>}
            <div className={collection.isEnough ? classes.isEnough : ""}>
              <CardSupplements
                supplementsForCard={supplementsForCard}
                id={collection.id}
                isEnough={collection.isEnough}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default observer(MainSupplements);
