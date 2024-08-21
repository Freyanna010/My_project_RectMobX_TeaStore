import classes from "./CardTeaMainBasket.module.css";

import { observer } from "mobx-react-lite";
import { FC, useState } from "react";
import { Link } from "react-router-dom";
import teaStore from "../../../../stores/teaStore";
import Button from "../../../../Components/Button";

const CardTeaMainBasket: FC = () => {
  return (
    <div className={classes.man_basket}>
      <div className={classes.tea}>
        <h2 className={classes.title}> tea: </h2>
        {teaStore.mainTeaBasket.map((tea) => {
          const onRemoveHandler = () => {
            teaStore.removeTeaMainBasket();
            teaStore.changeIsEnoughTea();
          };
          return (
            <div className={classes.tea_basket} key={tea.id}>
              <div className={classes.icon}>
                <img src={tea.img} alt={tea.name} onClick={onRemoveHandler} />
              </div>
              <div>
                <h3>
                  {tea.name}
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default observer(CardTeaMainBasket);
