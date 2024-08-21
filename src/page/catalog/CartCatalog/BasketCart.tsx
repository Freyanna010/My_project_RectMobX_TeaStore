import classes from "./BasketCart.module.css";
import teaStore from "../../../stores/teaStore";
import { observer } from "mobx-react-lite";
import { FC, useState } from "react";
import Button from "../../../Components/Button";
import userBasketStore from "../../../stores/userBasketStore";
import CardTeaMainBasket from "./CardTeaMainBasket";
import CardSupplementMainBasket from "./CardSupplementMainBasket";
import CartLink from "../../../Components/CartLink";

const BasketCart: FC = () => {
  const onHandlerAddToCard = () => {
    userBasketStore.addTeaAndSupplementToUserBasket(
      teaStore.mainTeaBasket,
      teaStore.mainSupplementsBasket
    );
    teaStore.removeTeaOnAddButton();
    teaStore.removeSupplementsOnAddButton();
  };

  return (
    <div className={classes.man_basket}>
      <CartLink />
      <CardTeaMainBasket />
      <CardSupplementMainBasket />
      {teaStore.mainTeaBasket.length > 0 &&
        teaStore.mainSupplementsBasket.length > 0 && (
          <div className={classes.buttons}>
            <Button
              type={"primary"}
              shape={"square"}
              size={"large "}
              onClick={onHandlerAddToCard}
            >
              add to card
            </Button>
            Price: {teaStore.priceProductMainBasket}
          </div>
        )}
    </div>
  );
};

export default observer(BasketCart);
