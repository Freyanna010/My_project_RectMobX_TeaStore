import classes from "./Cards.module.css";
import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};
const Cards: FC<Props> = ({ children }) => {
  return <div className={classes.cards}>{children}</div>;
};

export default Cards;
