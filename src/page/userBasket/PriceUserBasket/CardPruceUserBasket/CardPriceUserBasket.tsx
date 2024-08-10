import { observer } from "mobx-react-lite";
import classes from "./CardPriceUserBasket.module.css";
import { FC, useState } from "react";
import teaStore from "../../../../stores/teaStore";
import { useSearchParams } from "react-router-dom";

type Props = {
  userBasket: any[];
};

const CardPriceUserBasket: FC<Props> = (props) => {
  let [qtyValue, setQtyValue] = useState<number>(1);

  const onMinusHandler = () => {
    if (qtyValue > 1) {
      setQtyValue(--qtyValue);
      teaStore.decreaseTotalProduct()
    } else {
      // TODO: удалить карточку с чаем
    }
  };
  const onPlusHandler = () => {
    setQtyValue(++qtyValue);
    teaStore.increaseTotalProduct()
  };

  return (
    <div className={classes.cardPrice}>
      <div>
        <img src="./../../../../public/ea_pack.png" />{" "}
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
     {/* TODO: другой прайс */}
      <div>price: {teaStore.price}</div>

      <div>
        Qty:
        <button onClick={onMinusHandler}>➖</button> {qtyValue}{" "}
        <button onClick={onPlusHandler}>➕</button>
      </div>

      <div>total {teaStore.totalProduct}</div>
    </div>


  );
};
export default observer(CardPriceUserBasket);
