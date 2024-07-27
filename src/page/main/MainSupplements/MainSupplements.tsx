import classes from "./MainSupplements.module.css";
import SupplementsCard from "./Supplements/SupplementsCard";
import { CollectionSupplements, Supplement } from "../../../models";

type Props = {
  collectionSupplements: CollectionSupplements[];
  supplements: Record<string, Supplement[]>;
  // addSupplementMainBasket: (id: string, collectionId: string) => void;
};

const MainSupplements = (props: Props) => {
  return (
    <div>
      {props.collectionSupplements.map((cl) => {
        const collectionIndigenous = props.supplements[cl.id];
        return (
          <div className={classes.indigenous_card} key={cl.id}>
            <div className={classes.tittle}>
              <h3>Choose a {cl.name}</h3>
            </div>
            <div className={cl.isEnough ? classes.isEnough : ""}>
              <SupplementsCard
                collectionIndigenous={collectionIndigenous}
                id={cl.id}
                // addIndigenousManBasket={props.addSupplementMainBasket}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MainSupplements;
