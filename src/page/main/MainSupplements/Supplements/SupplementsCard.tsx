import classes from "./SupplementsCard.module.css";
import teaStore from "../../../../stores/teaStore";
import { observer } from "mobx-react-lite";
import { Supplement } from "../../../../models";
import { FC} from "react";
import ButtonAddRemove from "../../../../Components/ButtonAddRemove";


type Props = {
  supplementsForCard: Supplement[];
  id: string;
  isEnough: boolean
};
const SupplementsCard: FC<Props> = (props) => {
  return (
    <div>
      <div>
        <ul className={classes.indigenous_card}>
          {props.supplementsForCard.map((s) => {
            const onAddHandler = () => {
              teaStore.addSupplementMainBasket(s.id, props.id);
              teaStore.changeIsEnoughSupplements();             
            };
            return (
              <li key={s.id} className={s.isAdd  ? classes.isEnough : ""}>
                <div >
                  <div className={classes.icon}>
                    <img src={s.img} alt={s.name} />
                  </div>
                  <div className={classes.title}>
                    <h3>
                      {s.name}
                      <ButtonAddRemove
                        onClick={onAddHandler}
                        content={"./../../../../public/add_button.png"}
                      />
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

export default observer(SupplementsCard);
