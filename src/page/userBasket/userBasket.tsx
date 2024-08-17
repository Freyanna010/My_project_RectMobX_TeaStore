import { observer } from "mobx-react-lite";
import classes from "./userBasket.module.css";
import { FC } from "react";
import HeaderUserBasket from "./HeaderUserBasket";
import PriceUserBasket from "./ProductsUserBasket";
import TotalUserBasket from "./TotalUserBasket";
import GridPage from "../../Components/GridPage";


const UserBasket: FC = () => {
  return (
    <GridPage>
      <HeaderUserBasket/>
      <PriceUserBasket/>
      {/*TODO:переименовать */}
      <TotalUserBasket/>
    </GridPage>
  );
};
export default observer(UserBasket);
