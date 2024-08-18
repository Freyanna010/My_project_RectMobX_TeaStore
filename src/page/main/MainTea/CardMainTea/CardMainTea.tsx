import classes from "./CardMainTea.module.css";
import { FC, useState } from "react";
import { observer } from "mobx-react-lite";
import teaStore from "../../../../stores/teaStore";
import Button from "../../../../Components/Button";
import Modal from "../../../../Components/Modal";

const CardMainTea: FC = () => {
  const [modalActive, setModalActive] = useState<boolean>(false);
  const [description, setDescription] = useState<string>("");
  return (
    <div>
      {
        <ul className={classes.tea_card}>
          {teaStore.tea.map((tea) => {
            const onAddHandler = () => {
              teaStore.addTeaToMainBasket(tea.id);
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

export default observer(CardMainTea);
