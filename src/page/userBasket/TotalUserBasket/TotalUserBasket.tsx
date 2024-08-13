import { observer } from "mobx-react-lite";
import classes from "./TotalUserBasket.module.css";
import { FC } from "react";




const TotalUserBasket: FC = () => {
  return (
    <>
    {/* TODO: тут общая сумма за все продукты */}
      <h2>total: </h2>
      <button>buy</button>
    </>
  );
};
export default observer(TotalUserBasket);
