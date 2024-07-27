import classes from "./MainBasket.module.css";
import { Tea, Supplement } from "../../../models";


type Props = {
  manTeaBasket: Tea[];
  mainSupplementsBasket: Supplement[];
};

const ManBasket = (props: Props) => {
  return (
    <div className={classes.man_basket}>
      <div className={classes.tea}>
        <h2 className={classes.title}> tea: </h2>
        {props.manTeaBasket.map((t) => {
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
          {props.mainSupplementsBasket.map((t) => {
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

export default ManBasket;
