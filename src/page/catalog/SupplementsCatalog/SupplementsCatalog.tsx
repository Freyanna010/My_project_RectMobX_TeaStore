import classes from "./SupplementsCatalog.module.css";
import SupplementsProducts from "./SupplementsProducts/SupplementsProducts";
import teaStore from "../../../stores/catalogStore";
import { observer } from "mobx-react-lite";
import { FC } from "react";
import CardContainer from "../../../Components/CardContainer";

const SupplementsCatalog: FC = () => {
  return (
    <div>
      {teaStore.collectionSupplements.map((collection) => {
        const supplementsForCard = teaStore.supplements[collection.id];
        return (
          <div key={collection.id} id={collection.idScroll}>
            {collection.isEnough && <div>IS ENOUGH!</div>}
            <div className={collection.isEnough ? classes.isEnough : ""}>
              <CardContainer>
                <SupplementsProducts
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

export default observer(SupplementsCatalog);
