import { PropsWithChildren } from "react";

type HtmlButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
type CommonButtonProps = Pick<HtmlButtonProps, "onClick" | "className">;
export type ButtonShape = "round" | "square";
export type ButtonType = "primary" | "default" | "text";
export type ButtonSize = "large " | "small";

export type Props = CommonButtonProps &
  PropsWithChildren<{
    shape?: ButtonShape;
    type?: ButtonType;
    size?: ButtonSize;
  }>;
