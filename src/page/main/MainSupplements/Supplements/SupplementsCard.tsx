import classes from "./SupplementsCard.module.css";
import teaStore from "../../../../stores/teaStore";
import { observer } from "mobx-react-lite";
import { Supplement } from "../../../../models";

type Props = {
  supplementsForCard: Supplement[];
  id: string;
};

const SupplementsCard = (props: Props) => {
  return (
    <ul className={classes.indigenous_card}>
      {props.supplementsForCard.map((i) => {
        const onAddHandler = () => {
          teaStore.addSupplementManBasket(i.id, props.id);
        };
        return (
          <li key={i.id}>
            <div className={classes.icon}>
              <img src={i.img} alt={i.name} />
            </div>
            <div className={classes.title}>
              <h3>
                {i.name}
                <button onClick={onAddHandler}>+</button>
              </h3>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default observer(SupplementsCard);
