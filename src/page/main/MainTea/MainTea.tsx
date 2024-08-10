import classes from "./MainTea.module.css";
import { FC, useState } from "react";
import { observer } from "mobx-react-lite";
import CardMainTea from "./CardMainTea";
import DescriptionMainTea from "./DescriptionMainTea";

const MainTea: FC = () => {
  return (
    <div className={classes.mainTea}>
      <DescriptionMainTea />
      <CardMainTea />
    </div>
  );
};

export default observer(MainTea);
