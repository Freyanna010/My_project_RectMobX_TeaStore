import classes from "./MainTea.module.css";
import { FC, useState } from "react";
import Modal from "../../../Components/Modal";
import teaStore from "../../../stores/teaStore";
import { observer } from "mobx-react-lite";
import ButtonAddRemove from "../../../Components/ButtonAddRemove";

const MainTea: FC = () => {
  const [modalActive, setModalActive] = useState<boolean>(false);
  const [description, setDescription] = useState<string>("");
  return (
    <div>
      {
        <ul className={classes.tea_card}>
          {teaStore.tea.map((t) => {
            const onAddHandler = () => {
              teaStore.addTeaMainBasket(t.id);
              //  TODO:remake opacity effect, add function filter
              // t.isEnough = true;
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
                  <ButtonAddRemove
                    onClick={onAddHandler}
                    content={"./../../../../public/add_button.png"}
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

export default observer(MainTea);
