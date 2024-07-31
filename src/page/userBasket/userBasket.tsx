import { observer } from "mobx-react-lite";
import classes from "./userBasket.module.css";
import { FC } from "react";


const UserBasket: FC = () => {
  return (
    <div className={classes.userBasket}>
     😋
    </div>
  );
};
export default observer(UserBasket);
