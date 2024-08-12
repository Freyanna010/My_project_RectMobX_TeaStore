import { observer } from "mobx-react-lite";
import { FC } from "react";
import userBasketStore from "../../../stores/userBasketStore";
import Cards from "../../../Components/Cards";
import CardProductsUserBasket from "./CardProductsUserBasket/CardProductsUserBasket";

const ProductsUserBasket: FC = () => {
  return (
    <div>
      {userBasketStore.userBasket.length > 0 ? (
        <ul>
          {userBasketStore.userBasket.map((basket) => {
            return (
              <li key={basket.id}>
                <Cards>
                  <CardProductsUserBasket userBasket={basket} />
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
