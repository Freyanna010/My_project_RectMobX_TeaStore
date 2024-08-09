import classes from "./MainTea.module.css";
import { FC, useState } from "react";
import Modal from "../../../Components/Modal";
import teaStore from "../../../stores/teaStore";
import { observer } from "mobx-react-lite";
import Button from "../../../Components/Button";
import { Link } from "react-scroll";

const MainTea: FC = () => {
  const [modalActive, setModalActive] = useState<boolean>(false);
  const [description, setDescription] = useState<string>("");
  return (
    <div>
      <div className={classes.description}>
        <p className={classes.description_text}>
          {/* TODO: поправить текст */}
          You can make your own unique tea. Choose a tea and add supplements to
          it:
        </p>     
        <Link to="fruit" smooth={true} duration={1000} offset={-200}>
          <p className={classes.description_link}>fruit supplements </p>
        </Link>
        <Link to="herbal" smooth={true} duration={1000} offset={-200}>
          <p className={classes.description_link}>herbal supplements </p>
        </Link>
        <Link to="spice" smooth={true} duration={1000} offset={-200}>
          <p className={classes.description_link}>spice supplements</p>
        </Link>
        <p className={classes.description_textSmall}>
          You can choose no more than six supplements.
        </p>
      </div>

      {
        <ul className={classes.tea_card}>
          {teaStore.tea.map((tea) => {
            const onAddHandler = () => {
              teaStore.addTeaMainBasket(tea.id);
              teaStore.changeIsEnoughTea();
              teaStore.getTeaPrice();
            };
            const onDescriptionHandler = () => {
              setModalActive(true);
              setDescription(tea.description);
            };

            return (
              <li
                key={tea.id}
                className={tea.isEnough ? classes.tea_cardEnough : ""}
              >
                <div className={classes.icon}>
                  <img src={tea.img} alt={tea.name} />
                </div>
                <div className={classes.title}>
                  <h3>{tea.name}</h3>
                  <p>{tea.price} €</p>
                  <Button
                    onClick={onAddHandler}
                    type={"primary"}
                    shape={"round"}
                    size={"large "}
                  >
                    <img src="./../../../../public/add_button.png" />
                  </Button>
                </div>
                <div className={classes.button}>
                  <Button
                    onClick={onDescriptionHandler}
                    type={"primary"}
                    shape={"square"}
                    size={"large "}
                  >
                    description
                  </Button>
                </div>
              </li>
            );
          })}
        </ul>
      }
      <Modal
        active={modalActive}
        setActive={setModalActive}
        text={description}
      />
    </div>
  );
};

export default observer(MainTea);
