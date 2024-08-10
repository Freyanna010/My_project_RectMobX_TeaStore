import classes from "./MainBasket.module.css";
import teaStore from "../../../stores/teaStore";
import { observer } from "mobx-react-lite";
import { FC, useState } from "react";
import Button from "../../../Components/Button";
import userBasketStore from "../../../stores/userBasketStore";
import CardTeaMainBasket from "./CardTeaMainBasket";
import CardSupplementMainBasket from "./CardSupplementMainBasket";
import CartLink from "../../../Components/CartLink";


const MainBasket: FC = () => {
  let [count, setCount] = useState<number>(0);

  const onHandlerAddToCard = () => {
    userBasketStore.addTeaToUserBasket(teaStore.mainTeaBasket);
    userBasketStore.addSupplementsToBasket(teaStore.mainSupplementsBasket);
    userBasketStore.createArray();
    teaStore.deleteTeaMainBasket();
    teaStore.deleteSupplementsMainBasket();
    setCount(++count);
  };

  return (
    <div className={classes.man_basket}>
      <CartLink count={count} />
      <CardTeaMainBasket />
      <CardSupplementMainBasket />
      {teaStore.mainTeaBasket.length > 0 && (
        <div className={classes.buttons}>
          <Button
            type={"primary"}
            shape={"square"}
            size={"large "}
            onClick={onHandlerAddToCard}
          >
            add to card
          </Button>
          Price: {teaStore.price}
        </div>
      )}
    </div>
  );
};

export default observer(MainBasket);
