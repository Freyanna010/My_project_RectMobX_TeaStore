import { observer } from "mobx-react-lite";
import classes from "./CardPriceUserBasket.module.css"
import { FC } from "react";
import teaStore from "../../../../stores/teaStore";

type Props = {
  userBasket: any[]
};

const CardPriceUserBasket: FC<Props> = (props) => {
  return (
      <div>
          <ul>
            <li>
              <img src="./../../../../public/ea_pack.png" />
              {props.userBasket.map((basket) => {
                return (
                  <div>
                    <div>{basket.name},</div>
                  </div>
                );
              })}

              <div>price: {teaStore.price} </div>
              <button> - qty +</button>
            </li>
          </ul>
      </div>

  );
};
export default observer(CardPriceUserBasket);
