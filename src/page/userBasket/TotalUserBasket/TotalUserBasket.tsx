import { observer } from "mobx-react-lite";
import classes from "./TotalUserBasket.module.css";
import { FC } from "react";

const TotalUserBasket: FC = () => {
  return (
    <>
      {/* TODO: общая сумма продуктов*/}
      <h2>total: </h2>
      <button>buy</button>
    </>
  );
};
export default observer(TotalUserBasket);
