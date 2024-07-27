import classes from "./main.module.css";
import MainTea from "./MainTea";
import MainSupplements from "./MainSupplements";
import MainBasket from "./MainBasket";
import { CollectionSupplements, Supplement, Tea } from "../../models";

type Props = {
  tea: Tea[];
  collectionSupplements: CollectionSupplements[];
  supplements: Record<string, Supplement[]>;
  addTeaMainBasket: (id: string) => void;
  mainTeaBasket: Tea[];
  addSupplementMainBasket: (id: string, collectionId: string) => void;
  mainSupplementsBasket: Supplement[];
};

const Main = (props: Props) => {
  return (
    <div className={classes.man}>
      <div className={classes.man_tea}>
        <MainTea tea={props.tea} addTeaManBasket={props.addTeaMainBasket} />
      </div>

      <div className={classes.man_indigenous}>
        <MainSupplements
          collectionSupplements={props.collectionSupplements}
          supplements={props.supplements}
          addSupplementMainBasket={props.addSupplementMainBasket}
        />
      </div>

      <div className={classes.man_basket}>
        <MainBasket
          manTeaBasket={props.mainTeaBasket}
          mainSupplementsBasket={props.mainSupplementsBasket}
        />
      </div>
    </div>
  );
};

export default Main;
