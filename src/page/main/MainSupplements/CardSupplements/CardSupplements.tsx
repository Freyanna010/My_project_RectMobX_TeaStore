import classes from "./CardSupplements.module.css";
import teaStore from "../../../../stores/teaStore";
import { observer } from "mobx-react-lite";
import { Supplement } from "../../../../models";
import { FC } from "react";
import Button from "../../../../Components/Button";


type Props = {
  supplementsForCard: Supplement[];
  id: string;
  isEnough: boolean;
  name: string;
};
const CardSupplements: FC<Props> = (props) => {
  return (
    <div>
      <div>
        <h3>Choose a {props.name}</h3>
        <ul className={classes.indigenous_card}>
          {props.supplementsForCard.map((supplement) => {
            const onAddHandler = () => {
              teaStore.addSupplementMainBasket(supplement.id, props.id);
              teaStore.changeIsEnoughSupplements();
              teaStore.getSupplementPrice();
            };
            return (
              <li key={supplement.id}>
                <div>
                  <div className={classes.icon}>
                    <img
                      src={supplement.img}
                      alt={supplement.name}
                      className={supplement.isAdd ? classes.isAdd : ""}
                    />
                  </div>
                  <div className={classes.title}>
                    <h3>
                      {supplement.name}
                      <p>{supplement.price} €</p>
                      <Button
                        onClick={onAddHandler}
                        type={"primary"}
                        shape={"round"}
                        size={"large "}
                      >
                        <img src="./../../../../public/add_button.png" />
                      </Button>
                    </h3>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default observer(CardSupplements);
