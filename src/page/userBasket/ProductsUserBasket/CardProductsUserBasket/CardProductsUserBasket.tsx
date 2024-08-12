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
  let [qtyValue, setQtyValue] = useState<number>(1);

  // TODO:это можно считать пока здесь😏? потом, предположительно,  все продукты отправлю 🐱‍🏍в другой стейт(бэк) при нажатии на "buy" и там сложy сумму всех продуктов(это заначениеБ по-идее, нужно только визуально показать пользователю на данном этапе)
  let [totalProduct, setTotalProduct] = useState<number>(userBasket.price);

  const onMinusHandler = () => {
    if (qtyValue > 1) {
      setQtyValue(--qtyValue);
      setTotalProduct(totalProduct - userBasket.price);
    } else {
      // TODO: удалить карточку с чаем
    }
  };
  const onPlusHandler = () => {
    setQtyValue(++qtyValue);
    setTotalProduct(totalProduct + userBasket.price);
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

      <div>total:{totalProduct}</div>
    </div>
  );
};

export default observer(CardProductsUserBasket);
