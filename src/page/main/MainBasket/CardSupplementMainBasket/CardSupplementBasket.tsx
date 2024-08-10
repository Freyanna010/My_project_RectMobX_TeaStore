import classes from "./CardSupplementBasket.module.css";
import { observer } from "mobx-react-lite";
import { FC, useState } from "react";
import teaStore from "../../../../stores/teaStore";
import Button from "../../../../Components/Button";

// TODO:divide into components?
const CardSupplementBasket: FC = () => {
  return (
    <div className={classes.man_basket}>
      <div className={classes.indigenous}>
        <ul>
          <h2 className={classes.title}> supplements: </h2>
          {teaStore.mainSupplementsBasket.map((supplement) => {
            const onRemoveHandler = () => {
              // TODO:ругается, но по-другому пока не получилось😪
              supplement.isAdd = false;
              teaStore.removeSupplementMainBasket(supplement.id);
              teaStore.changeIsEnoughSupplements();
            };
            return (
              <li key={supplement.id}>
                <div>
                  <h3>
                    {supplement.name}
                    <Button
                      onClick={onRemoveHandler}
                      type={"primary"}
                      shape={"round"}
                      size={"large "}
                    >
                      <img src="./../../../../public/remove_button.png" />
                    </Button>
                  </h3>
                </div>
                <div className={classes.icon}>
                  <img
                    src={supplement.img}
                    alt={supplement.name}
                    onClick={onRemoveHandler}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default observer(CardSupplementBasket);
