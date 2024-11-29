import classNames from "classnames";

import styles from "./Letter.module.scss";

type Props = {
  letter: string;
  type: "space" | "visible" | "hidden";
};

export function Letter({ letter, type }: Props) {
  const letterClass = classNames(styles.letter, styles[type]);

  return <div className={letterClass}>{letter === "*" ? "" : letter}</div>;
}
