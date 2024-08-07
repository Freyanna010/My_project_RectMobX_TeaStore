import classes from "./main.module.css";
import MainTea from "./MainTea";
import MainSupplements from "./MainSupplements";
import MainBasket from "./MainBasket";
import { observer } from "mobx-react-lite";
import { FC } from "react";
import Wrapper from "../../Components/Wrapper";


const Main: FC = () => {
  return (
    <Wrapper>
      <MainTea />
      <MainSupplements />
      <MainBasket />
    </Wrapper>
  );
};
export default observer(Main);
