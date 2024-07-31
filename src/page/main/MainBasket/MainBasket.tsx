import classes from "./MainBasket.module.css";
import teaStore from "../../../stores/teaStore";
import { observer } from "mobx-react-lite";
import { FC } from "react";
import ButtonAddRemove from "../../../Components/ButtonAddRemove";
import { Link } from "react-router-dom";

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
        {teaStore.mainTeaBasket.map((t) => {
          const onRemoveHandler = () => {
            teaStore.removeTeaMainBasket();
            teaStore.changeIsEnoughTea();
          };
          return (
            <div className={classes.tea_basket} key={t.id}>
              <div className={classes.icon}>
                <img src={t.img} alt={t.name} onClick={onRemoveHandler} />
              </div>
              <div>
                <h3>
                  {t.name}
                  <ButtonAddRemove
                    onClick={onRemoveHandler}
                    content={"./../../../../public/remove_button.png"}
                  />
                </h3>
              </div>
            </div>
          );
        })}
      </div>

      <div className={classes.indigenous}>
        <ul>
          <h2 className={classes.title}> supplements: </h2>
          {teaStore.mainSupplementsBasket.map((s) => {
            const onRemoveHandler = () => {
              // TODO:ругается, но по-другому пока не получилось😪
              s.isAdd = false;
              teaStore.removeSupplementMainBasket(s.id);
              teaStore.changeIsEnoughSupplements();
            };
            return (
              <li key={s.id}>
                <div>
                  <h3>
                    {s.name}
                    <ButtonAddRemove
                      onClick={onRemoveHandler}
                      content={"./../../../../public/remove_button.png"}
                    />
                  </h3>
                </div>
                <div className={classes.icon}>
                  <img src={s.img} alt={s.name} onClick={onRemoveHandler} />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      {/* TODO:  */}
      <div className={classes.buttons}>
        <button className={classes.addBasket}>add into basket</button>
        <Link to="/basket">
          <button className={classes.addBasket}>open basket</button>
        </Link>
      </div>
    </div>
  );
};

export default observer(MainBasket);
