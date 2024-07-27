import classes from "./MainTea.module.css";
import { useState } from "react";
import Modal from "../../../Components/Modal";
import { Tea } from "../../../models";

type Props = {
  tea: Tea[];
  addTeaManBasket: (id: string) => void;
};

const MainTea = (props: Props) => {
  const [modalActive, setModalActive] = useState<boolean>(false);
  const [description, setDescription] = useState<string>("");

  return (
    <div>
      {
        <ul className={classes.tea_card}>
          {props.tea.map((t) => {
            const onAddHandler = () => {
              props.addTeaManBasket(t.id);
              t.isEnough = true;
            };
            const onDescriptionHandler = () => {
              setModalActive(true);
              setDescription(t.description);
            };

            return (
              <li
                key={t.id}
                className={t.isEnough ? classes.tea_cardEnough : ""}
              >
                <div className={classes.icon}>
                  <img src={t.img} alt={t.name} />
                </div>
                <div className={classes.title}>
                  <h3>{t.name}</h3>
                  <img
                    src="./../../../../public/add_button.png"
                    className={classes.button_add}
                    onClick={onAddHandler}
                  />
                </div>
                <div className={classes.button}>
                  <button onClick={onDescriptionHandler}>description</button>
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

export default MainTea;
