import { ButtonHTMLAttributes } from "react";
import { StyledButton } from "./Styles";
// import './Styles.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  secondary?: boolean;
  danger?: boolean;
};

export default function Button({
  danger = false,
  secondary = false,
  ...props
}: ButtonProps) {
  return <StyledButton danger={danger} secondary={secondary} {...props} />;
}
