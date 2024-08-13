import { observer } from "mobx-react-lite";
import classes from "./HeaderUserBasket.module.css";
import { FC } from "react";
import Button from "../../../Components/Button";
import { Link } from "react-router-dom";
import userBasketStore from "../../../stores/userBasketStore";

const HeaderUserBasket: FC = () => {
const onRemoveHendler = () => {
  userBasketStore.removeAllCardProductForUserBasket()
}

  return (
    <>
      <div className={classes.header}>
        <h2>Shopping cart</h2>
      </div>

      <div className={classes.buttons}>
        <Link to="/">
          <Button type={"primary"} shape={"square"} size={"large "}>
            <p>
              <img src="./../../../../public/back_button.png" alt="" />
              return
            </p>
          </Button>
        </Link>

        <Button type={"default"} shape={"square"} size={"large "} onClick={onRemoveHendler}>
          <p>
            remove cart
            <img src="./../../../../public/remove_busket_button  .png" alt="" />
          </p>
        </Button>
      </div>
    </>
  );
};
export default observer(HeaderUserBasket);
