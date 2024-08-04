import { FC } from "react";
import classes from "./Modal.module.css";
import Button from "../Button";

type Props = {
  active: boolean;
  setActive: (value: boolean) => void;
  text: string;
};
const Modal: FC<Props> = (props) => {
  const onCloseHandler = () => {
    props.setActive(false);
  };
  return (
    <div
      className={props.active ? classes.active : classes.description}
      onClick={onCloseHandler}
    >
      <div
        className={classes.content}
        onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
          e.stopPropagation()
        }
      >
        <div className={classes.button_close} onClick={onCloseHandler}>
          <Button type={"primary"} shape={"round"} size={"large "}>
            <img src="./../../../public/close_button .png" />
          </Button>
        </div>
        <div className={classes.text}> {props.text} </div>
        <div className={classes.button_more}>
          <Button type={"text"} shape={"square"} size={"large "}>
            {`learn more >>`}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
