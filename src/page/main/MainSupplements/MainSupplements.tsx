import classes from "./MainSupplements.module.css";
import SupplementsCard from "./Supplements/SupplementsCard";
import teaStore from "../../../stores/teaStore";
import { observer } from "mobx-react-lite";

const MainSupplements = () => {
  return (
    <div>
      {teaStore.collectionSupplements.map((cl) => {
        const supplementsForCard = teaStore.supplements[cl.id];
        return (
          <div className={classes.indigenous_card} key={cl.id}>
            <div className={classes.tittle}>
              <h3>Choose a {cl.name}</h3>
            </div>
            <div className={cl.isEnough ? classes.isEnough : ""}>
              <SupplementsCard
                supplementsForCard={supplementsForCard}
                id={cl.id}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default observer(MainSupplements);
