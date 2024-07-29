import { FC } from "react";
import classes from "./ButtonAddRemove.module.css";

type Props = {
  onClick: ()=> void;  
  content: string;
};
const ButtonAddRemove: FC<Props> = (props) => { 
  
  return (
    <div>
        <img src={props.content} 
        onClick={props.onClick}
        className={classes.button} />  
    </div>   
  ); 
};
export default ButtonAddRemove;
