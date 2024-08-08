import classes from "./MainBasket.module.css";
import teaStore from "../../../stores/teaStore";
import { observer } from "mobx-react-lite";
import { FC, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../../Components/Button";
import userBasketStore from "../../../stores/userBasketStore";

// TODO:divide into components?
const MainBasket: FC = () => {
  let [count, setCount] = useState(0);

  const onHandlerAddToCard = () => {
    userBasketStore.addTeaToUserBasket(teaStore.mainTeaBasket);
    userBasketStore.addSupplementsToBasket(teaStore.mainSupplementsBasket);
    userBasketStore.createArray();
    teaStore.deleteTeaMainBasket();
    teaStore.deleteSupplementsMainBasket();
    // userBasketStore.getPrice()
    setCount(++count);
  };

  return (
    <div className={classes.man_basket}>
      <Link to="/basket" className={classes.basketButton}>
        <div className={classes.basketButton_icon}>
          <span className={classes.basketButton_counter}>{count}</span>
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
      {teaStore.mainTeaBasket.length > 0 && (
        <div className={classes.buttons}>
          <Button
            type={"primary"}
            shape={"square"}
            size={"large "}
            onClick={onHandlerAddToCard}
          >
            add to card
          </Button>
          <Link to="/basket">
            <Button type={"default"} shape={"square"} size={"large "}>
              open basket
            </Button>
          </Link>
          Price: {teaStore.price}
        </div>
      )}
    </div>
  );
};

export default observer(MainBasket);
