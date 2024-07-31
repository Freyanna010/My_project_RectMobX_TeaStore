import { FC } from "react";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";

const Header: FC = () => {
  return (
    <div className={classes.header}>
      <Link to="/login">
        <button>Login</button>
      </Link>
      <Link to="/about">
        <button>About us</button>
      </Link>
   

    </div>
  );
};

export default Header;
