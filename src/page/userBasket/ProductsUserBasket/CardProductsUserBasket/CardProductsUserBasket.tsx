import { observer } from "mobx-react-lite";
import classes from "./CardProductsUserBasket.module.css";
import { FC, useEffect, useState } from "react";
import teaStore from "../../../../stores/teaStore";
import userBasketStore from "../../../../stores/userBasketStore";

type Props = {
  userBasket: any[];
};

const CardPriceUserBasket: FC<Props> = (props) => {
  let [qtyValue, setQtyValue] = useState<number>(1);

  // TODO:это может быть тут???(нет🤔)
  const priceUserBasket = props.userBasket
    .map((supplement) => supplement.price)
    .reduce((acc, item) => acc + item);
  let [total, setTotal] = useState<number>(priceUserBasket);

  const onMinusHandler = () => {
    if (qtyValue > 1) {
      setQtyValue(--qtyValue);
      setTotal(total - priceUserBasket);
    } else {
      // TODO: удалить карточку с чаем
    }
  };
  const onPlusHandler = () => {
    setQtyValue(++qtyValue);
    setTotal(total + priceUserBasket);
  };

  return (
    <div className={classes.cardPrice}>
      <div>
        <img src="./../../../../public/ea_pack.png" />
      </div>
      <div>
        <ul>
          {props.userBasket.map((basket) => {
            return (
              <li key={basket.id}>
                <div>
                  <div>{basket.name},</div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div>price: {priceUserBasket}</div>

      <div>
        Qty:
        <button onClick={onMinusHandler}>➖</button>
        {qtyValue}
        <button onClick={onPlusHandler}>➕</button>
      </div>

      <div>total: {total}</div>
    </div>
  );
};
export default observer(CardPriceUserBasket);
