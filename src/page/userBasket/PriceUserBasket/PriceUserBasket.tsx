import { observer } from "mobx-react-lite";
import classes from "./PriceUserBasket.module.css";
import { FC } from "react";
import userBasketStore from "../../../stores/userBasketStore";

import CardPriceUserBasket from "./CardPruceUserBasket/CardPriceUserBasket";
import Cards from "../../../Components/Cards";

const PriceUserBasket: FC = () => {
  return (
    <div>
      {userBasketStore.array.length > 0 ? (
        <ul>
          {userBasketStore.array.map((arr) => {
            return (
              <li key={arr.id}>
                <Cards>
                  <CardPriceUserBasket userBasket={arr} />
                </Cards>
              </li>
            );
          })}
        </ul>
      ) : (
        <div>
          <h2>The cart is empty</h2>
        </div>
      )}
    </div>
  );
};
export default observer(PriceUserBasket);
