import classes from "./CartLink.module.css";
import { observer } from "mobx-react-lite";
import { FC } from "react";
import { Link } from "react-router-dom";

type Pros = {
count: number
}

const CartLink: FC<Pros> = ({ count }) => {
  return (
    <Link to="/basket" className={classes.basketButton}>
      <div className={classes.basketButton_icon}>
        <span className={classes.basketButton_counter}>{count}</span>
      </div>
      <div className={classes.basketButton_title}> basket</div>
    </Link>
  );
};
export default observer(CartLink);
