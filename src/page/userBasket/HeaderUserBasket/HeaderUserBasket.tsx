import { observer } from "mobx-react-lite";
import classes from "./HeaderUserBasket.module.css";
import { FC } from "react";




const HeaderUserBasket: FC = () => {
  return (
    <>
      <h2>Shopping cart</h2>
      <button>return</button>
      <button>remove cart</button>
    </>
  );
};
export default observer(HeaderUserBasket);
