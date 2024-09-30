import classes from "./TeaProduct.module.css";
import { FC, useState } from "react";
import { observer } from "mobx-react-lite";
import teaStore from "../../../../stores/catalogStore";
import Button from "../../../../Components/Button";
import Modal from "../../../../Components/Modal";
import { Tea } from "../../../../models";

const ProductTea: FC<Tea> = (props) => {
  const [modalActive, setModalActive] = useState<boolean>(false);
  const [description, setDescription] = useState<string>("");
  const onAddHandler = () => {
    teaStore.addTeaToMainBasket(props.id);
    teaStore.changeIsEnoughTea();
    teaStore.getTeaPrice();
  };
  const onDescriptionHandler = () => {
    setModalActive(true);
    setDescription(props.description);
  };

  return (
    <div>
      <div className={props.isEnough ? classes.tea_cardEnough : ""}>
        <div className={classes.icon}>
          <img src={props.img} alt={props.name} />
        </div>
        <div className={classes.title}>
          <h3>{props.name}</h3>
          <p>{props.price} €</p>
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
      </div>

      <Modal
        active={modalActive}
        setActive={setModalActive}
        text={description}
      />
    </div>
  );
};

export default observer(ProductTea);
