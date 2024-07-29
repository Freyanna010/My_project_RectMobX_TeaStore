import classes from "./MainBasket.module.css";
import teaStore from "../../../stores/teaStore";
import { observer } from "mobx-react-lite";
import { FC } from "react";

const ManBasket: FC = () => {
  return (
    <div className={classes.man_basket}>
      <div className={classes.tea}>
        <h2 className={classes.title}> tea: </h2>
        {teaStore.mainTeaBasket.map((t) => {
          return (
            <div className={classes.tea_basket} key={t.id}>
              <div className={classes.icon}>
                <img src={t.img} alt={t.img} />
              </div>
              <div>
                <h3> {t.name} </h3>
              </div>
            </div>
          );
        })}
      </div>

      <div className={classes.indigenous}>
        <ul>
          <h2 className={classes.title}> supplements: </h2>
          {teaStore.mainSupplementsBasket.map((t) => {
            return (
              <li key={t.id}>
                <div>
                  <h3> {t.name} </h3>
                </div>
                <div className={classes.icon}>
                  <img src={t.img} alt={t.img} />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default observer(ManBasket);
