import classes from "./CartButton.module.css";
import { FC } from "react";
import { Link } from "react-router-dom";
import userBasketStore from "../../stores/userBasketStore";

const CartButton: FC = () => {
  return (
    <Link to="/basket" className={classes.basketButton}>
      {/* TODO:название классов */}
      <div className={classes.basketButton_icon}>
        <span className={classes.basketButton_counter}>
          {userBasketStore.userBasket.length}
        </span>
      </div>
      <div className={classes.basketButton_title}> basket</div>
    </Link>
  );
};
export default CartButton;
