import classes from "./SupplementsProducts.module.css";
import teaStore from "../../../../stores/teaStore";
import { observer } from "mobx-react-lite";
import { Supplement } from "../../../../models";
import { FC, useEffect } from "react";
import Button from "../../../../Components/Button";
import userBasketStore from "../../../../stores/userBasketStore";
import SupplementProduct from "./SuplementProduct/SupplementProduct";

type Props = {
  supplementsForCard: Supplement[];
  id: string;
  isEnough: boolean;
  name: string;
};
const SupplementsProducts: FC<Props> = (props) => {
  const onUpHandler = () => {
    teaStore.sortByIncrement(props.id);
  };
  const onDownHandler = () => {
    teaStore.sortByDecrement(props.id);
  };
   const onSortByNamesHandler = () => {
    teaStore.sortByNames(props.id)
  }

  return (
    <div>
      <div>
        <div>
          <h3>Choose a {props.name}</h3>
          {/* TODO:перенести в компоненты*/}
          <div>
            Sort by price
            <button onClick={onUpHandler}> ⬆ </button>
            <button onClick={onDownHandler}> ⬇ </button>
          </div>
          <button onClick={onSortByNamesHandler}>sort by names</button>
        </div>
        <ul className={classes.indigenous_card}>
          {props.supplementsForCard.map((supplement) => {
            return (
              <li key={supplement.id}>
                <SupplementProduct
                  supplementId={supplement.id}
                  id={props.id}
                  img={supplement.img}
                  name={supplement.name}
                  isAdd={supplement.isAdd}
                  price={supplement.price}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default observer(SupplementsProducts);
