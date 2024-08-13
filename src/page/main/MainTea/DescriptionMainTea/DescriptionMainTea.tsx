import classes from "./DescriptionMainTea.module.css";
import { FC } from "react";
import { observer } from "mobx-react-lite";
import { Link } from "react-scroll";

const DescriptionMainTea: FC = () => {
  return (
    <div className={classes.description}>
      <p className={classes.description_text}>
        {/* TODO: поправить текст */}
        You can make your own unique tea. Choose a tea and add supplements to
        it:
      </p>
      <Link to="fruit" smooth={true} duration={1000} offset={-220}>
        <p className={classes.description_link}>fruit supplements </p>
      </Link>
      <Link to="herbal" smooth={true} duration={1000} offset={-220}>
        <p className={classes.description_link}>herbal supplements </p>
      </Link>
      <Link to="spice" smooth={true} duration={1000} offset={-220}>
        <p className={classes.description_link}>spice supplements</p>
      </Link>
      <p className={classes.description_textSmall}>
        You can choose no more than six supplements.
      </p>
    </div>
  );
};

export default observer(DescriptionMainTea);
