import { observer } from "mobx-react-lite";
import { FC } from "react";
import userBasketStore from "../../../stores/userBasketStore";
import CardProductsUserBasket from "./CardProductsUserBasket/CardProductsUserBasket";
import CardContainer from "../../../Components/CardContainer";

const ProductsUserBasket: FC = () => {
  return (
    <div>
      {userBasketStore.userBasket.length > 0 ? (
        <ul>
          {userBasketStore.userBasket.map((basket) => {
            return (
              <li key={basket.id}>
                <CardContainer>
                  <CardProductsUserBasket userBasket={basket} />
                </CardContainer>
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
