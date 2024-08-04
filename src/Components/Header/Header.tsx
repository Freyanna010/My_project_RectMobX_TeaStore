import { FC } from "react";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import Button from "../Button";

const Header: FC = () => {
  return (
    <div className={classes.header}>
      <Link to="/login">
        <Button type={"primary"} shape={"round"} size={"large "}>
          <img src="./../../../public/button_login.png" />
        </Button>
      </Link>
      <Link to="/about">
        <Button type={"text"} shape={"square"} size={"large "}>
          About us
        </Button>
      </Link>
    </div>
  );
};

export default Header;
