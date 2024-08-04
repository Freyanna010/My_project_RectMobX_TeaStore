import { ButtonShape, ButtonSize, ButtonType } from "../models";

export const getAdditionalClassNameByType = (type?: ButtonType): string => {
  return `buttonType_${type}`;
};
export const getAdditionalClassNameByShape = (shape?: ButtonShape): string =>
  `buttonShape_${shape}`;
export const getAdditionalClassNameBySize = (size?: ButtonSize): string =>
  `buttonSize_${size}`;
