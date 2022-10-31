import { ButtonHTMLAttributes } from "react";
import { StyledButton } from "./Styles";
// import './Styles.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  
  danger?: boolean;
};

export default function Button({ danger = false, ...props }: ButtonProps) {
  return <StyledButton className={`button ${danger ? "danger" : ""}`} {...props} />;
}
