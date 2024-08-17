import classes from "./CardContainer.module.css";
import { FC } from "react";

type Props = React.PropsWithChildren;
const Cards: FC<Props> = ({ children }) => {
  return <div className={classes.cards}>{children}</div>;
};

export default Cards;
