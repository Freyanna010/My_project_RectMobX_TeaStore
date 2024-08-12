import { observer } from "mobx-react-lite";
import classes from "./ProductsUserBasket.module.css";
import { FC } from "react";
import userBasketStore from "../../../stores/userBasketStore";

import CardPriceUserBasket from "./CardProductsUserBasket/CardProductsUserBasket";
import Cards from "../../../Components/Cards";

const ProductsUserBasket: FC = () => {
  return (
    <div>
      {userBasketStore.userBasket.length > 0 ? (
        <ul>
          {userBasketStore.userBasket.map((arr) => {
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
export default observer(ProductsUserBasket);
