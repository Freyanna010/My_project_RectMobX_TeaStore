import classes from "./CartLink.module.css";
import { observer } from "mobx-react-lite";
import { FC } from "react";
import { Link } from "react-router-dom";
import userBasketStore from "../../stores/userBasketStore";


const CartLink: FC = () => {
  return (
    <Link to="/basket" className={classes.basketButton}>
      <div className={classes.basketButton_icon}>
        <span className={classes.basketButton_counter}>{userBasketStore.userBasket.length}</span>
      </div>
      <div className={classes.basketButton_title}> basket</div>
    </Link>
  );
};
export default observer(CartLink);
