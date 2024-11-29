import classNames from "classnames";

import styles from "./Button.module.scss";

type Props = {
  text?: string;
  icon?: React.ReactNode;
  type?: "primary" | "secondary" | "square";
  isRounded?: boolean;
  size?: "small" | "medium" | "large";
  textSize?: "small" | "medium" | "large";
  onClick: () => void;
};

export function Button({
  text,
  icon,
  type = "primary",
  size = "medium",
  textSize = "medium",
  isRounded,
  onClick,
}: Props) {
  const buttonClass = classNames(styles.button, {
    [styles[type]]: type,
    [styles.rounded]: isRounded,
    [styles[size]]: size,
    [styles[`text-${textSize}`]]: textSize,
  });

  return (
    <button className={buttonClass} onClick={onClick}>
      {text && <span>{text}</span>} {icon}
    </button>
  );
}
