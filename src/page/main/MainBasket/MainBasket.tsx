import classes from "./MainBasket.module.css";
import teaStore from "../../../stores/teaStore";
import { observer } from "mobx-react-lite";
import { FC } from "react";
import { Link } from "react-router-dom";
import Button from "../../../Components/Button";

const MainBasket: FC = () => {
  // TODO:divide into components?
  return (
    <div className={classes.man_basket}>

      <Link to="/basket" className={classes.basketButton}>
        <div className={classes.basketButton_icon}>
          <span className={classes.basketButton_counter}>0</span>
        </div>
        <div className={classes.basketButton_title}> basket</div>
      </Link>

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
                  <img src={supplement.img} alt={supplement.name} onClick={onRemoveHandler} />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={classes.buttons}>

        {/* TODO:при добавлении */}
        <Button type={"primary"} shape={"square"} size={"large "}>
          add to card
        </Button>
        {/* TODO:поменять на primary при добавюв корзину */}
        <Link to="/basket">
          <Button type={"default"} shape={"square"} size={"large "}>
            open basket
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default observer(MainBasket);
