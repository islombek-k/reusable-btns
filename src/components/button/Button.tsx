import { FC, MouseEvent, ReactNode } from "react";
import cls from "./Button.module.scss"

type BTN_TYPES = "orangeClassic" | "clearOutlined" | "blackClassic" | "blackOutlined" 

type BtnProps = {
    variant: BTN_TYPES
    children: ReactNode
    onClick:  (event: MouseEvent<HTMLButtonElement>) => void;
}

export const Button:FC<BtnProps> = ({ variant, children,onClick, ...props }) => {
  return <button type="button" onClick={onClick} className={`${cls.button} ${cls[variant]}`} {...props} >{children}</button>;
};
