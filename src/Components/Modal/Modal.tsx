import classes from "./Modal.module.css";

type Props = {
  active: boolean;
  setActive: (value: boolean) => void;
  text: string;
};

const Modal: React.FC<Props> = (props: Props) => {
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
            <img src="./../../../public/close_button .png" />
          </div>     
             <div className={classes.text}> {props.text} </div>
           <div className={classes.button_more}>
       <a href="#"> learn more >> </a>
          </div>
      </div>
    </div>
  );
};

export default Modal;
