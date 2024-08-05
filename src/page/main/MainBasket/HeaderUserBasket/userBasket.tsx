import { observer } from "mobx-react-lite";
import classes from "./userBasket.module.css";
import { FC } from "react";




const UserBasket: FC = () => {
  return (
    <>
      <h2>Shopping cart</h2>
      <button>return</button>
      <button>remove cart</button>
    </>
  );
};
export default observer(UserBasket);
