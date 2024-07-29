import classes from "./main.module.css";
import MainTea from "./MainTea";
import MainSupplements from "./MainSupplements";
import MainBasket from "./MainBasket";
import { observer } from "mobx-react-lite";
import { FC } from "react";


const Main: FC = () => {
  return (
    <div className={classes.man}>
      <div className={classes.man_tea}>
        <MainTea />
      </div>

      <div className={classes.man_indigenous}>
        <MainSupplements />
      </div>

      <div className={classes.man_basket}>
        <MainBasket />
      </div>
    </div>
  );
};
export default observer(Main);
