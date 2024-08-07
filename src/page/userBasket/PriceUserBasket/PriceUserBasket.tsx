import { observer } from "mobx-react-lite";
import classes from "./userBasket.module.css";
import { FC } from "react";
import userBasketStore from "../../../stores/userBasketStore";
const PriceUserBasket: FC = () => {
  return (
    <>
      <ul>
        <li>
          <img src="./../../../../public/ea_pack.png" />
          {userBasketStore.userBasket.map((basket) => {
            return (
              <div>
                <div>{basket.name},</div>
              </div>
            );
          })}
          {/* TODO:🤷🏻‍♀️ */}
          {/* {userBasketStore.array
            .map((arr) => arr)
            .map((a) => {
              return <div>{a.name}</div>;
            })} */}
          <div>price: {userBasketStore.price} </div>
          <button> - qty +</button>
      
        </li>
      </ul>
      <h2></h2>
    </>
  );
};
export default observer(PriceUserBasket);
