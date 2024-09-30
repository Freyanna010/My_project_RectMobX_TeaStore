import classes from "./TeaCatalog.module.css";
import { FC } from "react";
import { observer } from "mobx-react-lite";
import teaStore from "../../../stores/catalogStore";
import TeaProduct from "./TeaProduct";

const TeaCatalog: FC = () => {
  return (
    <ul className={classes.tea_card}>
      {teaStore.tea.map((tea) => {
        return (
          <li key={tea.id}>
            <TeaProduct
              id={tea.id}
              name={tea.name}
              img={tea.img}
              isEnough={tea.isEnough}
              description={tea.description}
              price={tea.price}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default observer(TeaCatalog);
