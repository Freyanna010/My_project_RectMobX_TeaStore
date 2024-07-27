import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.header}>
      <button>Login</button>
      <button>About us</button>
      <button>Basket</button>
    </div>
  );
};

export default Header;
