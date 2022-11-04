import { ButtonHTMLAttributes } from "react";
import { StyledButton } from "./Styles";
// import './Styles.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  secondary?: boolean;
  single?: boolean;
};

export default function Button({
  secondary = false,
  single = false,
  ...props
}: ButtonProps) {
  return <StyledButton single={single} secondary={secondary} {...props} />;
}
