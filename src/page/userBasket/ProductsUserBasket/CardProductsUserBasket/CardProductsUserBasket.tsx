import { observer } from "mobx-react-lite";
import classes from "./CardProductsUserBasket.module.css";
import { FC, useEffect, useState } from "react";
import teaStore from "../../../../stores/teaStore";
import userBasketStore from "../../../../stores/userBasketStore";
import { Product } from "../../../../models";
import { v1 } from "uuid";

type Props = {
  userBasket: Product;
};

const CardProductsUserBasket: FC<Props> = ({ userBasket }) => {
  const [qtyValue, setQtyValue] = useState<number>(1);

  // TODO:перенести в стор
  let [totalProductPrice, setTotalProductPrice] = useState<number>(userBasket.price);
  const onMinusHandler = () => {
    if (qtyValue > 1) {
      setQtyValue((value) => --value);
      setTotalProductPrice(totalProductPrice - userBasket.price);
    } else {
      userBasketStore.removeCardProductForUserBasket(userBasket.id);
    }
  };
  const onPlusHandler = () => {
    setQtyValue((value) => ++value);
    setTotalProductPrice(totalProductPrice + userBasket.price);
  };

  return (
    <div className={classes.cardProducts}>
      <div className={classes.cardProducts_icon}>
        <img src="./../../../../public/ea_pack.png" />
      </div>
      <div className={classes.cardProducts_name}>
        <ul>
          {userBasket.name.map((name) => {
            //TODO: можно так ключ задать?
            return <li key={v1()}>{name}</li>;
          })}
        </ul>
      </div>
      <div className={classes.cardProducts_price}>
        price: {userBasket.price}
      </div>

      <div>
        Qty: <button onClick={onMinusHandler}>➖</button>
        {qtyValue}
        <button onClick={onPlusHandler}>➕</button>
      </div>

      <div>total:{totalProductPrice}</div>
    </div>
  );
};

export default observer(CardProductsUserBasket);
