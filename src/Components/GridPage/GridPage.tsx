import classes from "./GridPage.module.css";
import { observer } from "mobx-react-lite";
import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode[]
}
const GridPage: FC<Props> = ({ children }) => {
  return (
    // TODO: названия классов
    <div className={classes.wrapper}>
      <div className={classes.wrapper_0}>{children[0]}</div>

      <div className={classes.wrapper_1}>{children[1]}</div>

      <div className={classes.wrapper_2}>{children[2]}</div>
    </div>
  );
};
export default observer(GridPage);
