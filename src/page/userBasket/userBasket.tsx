import { observer } from "mobx-react-lite";
import classes from "./userBasket.module.css";
import { FC } from "react";
import Wrapper from "../../Components/Wrapper";
import HeaderUserBasket from "./HeaderUserBasket";
import PriceUserBasket from "./PriceUserBasket";
import TotalUserBasket from "./TotalUserBasket";


const UserBasket: FC = () => {
  return (
    <Wrapper>
      <HeaderUserBasket/>
      <PriceUserBasket/>
      <TotalUserBasket/>
    </Wrapper>
  );
};
export default observer(UserBasket);
