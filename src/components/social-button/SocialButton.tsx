import { FC, MouseEvent } from "react"
import AppleIcon from "../../assets/icons/AppleIcon";
import cls from "./SocialButton.module.scss"
import PlayStoreIcon from "../../assets/icons/PlayStoreIcon";

type SocialButtonProps = {
    storeName: string;
    variant: string;
    onClick:  (event: MouseEvent<HTMLButtonElement>) => void;
}

export const SocialButton:FC<SocialButtonProps> = ({storeName, variant, onClick, ...props}) => {
  return (
    <button className={`${cls.button} ${cls[variant]}`} onClick={onClick} {...props}>
        {variant === "outlined" ? <AppleIcon/> : <PlayStoreIcon/>}
        <div className={cls.info}>
            <p>Download on the</p>
            <p>{storeName}</p>
        </div>
    </button>
  )
}
