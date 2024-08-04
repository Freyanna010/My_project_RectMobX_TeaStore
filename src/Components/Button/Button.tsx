import { FC } from "react";
import classes from "./Button.module.css";
import { Props } from "./models";
import {
  getAdditionalClassNameByShape,
  getAdditionalClassNameBySize,
  getAdditionalClassNameByType,
} from "./utilities";
import clsx from "clsx";

const Button: FC<Props> = (props) => {
  const { type, shape, size, children, ...commonButtonProps } = props;
  const additionalTypeClassName = getAdditionalClassNameByType(type)
  const additionalShapeClassName = getAdditionalClassNameByShape(shape);
  const additionalSizeClassName = getAdditionalClassNameBySize(size); 
  return (
    <button
      className={clsx(classes.button,
        classes[additionalTypeClassName],
        classes[additionalShapeClassName],
        classes[additionalSizeClassName],
      )}
      {...commonButtonProps}
    >
      {children}
    </button>
  );
};
export default Button;
