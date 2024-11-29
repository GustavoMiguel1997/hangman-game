import { Button } from "@components/Button/Button";

import styles from "./Keyboard.module.scss";

type Props = {
  letters: string[];
};

export function Keyboard({ letters }: Props) {
  return (
    <div className={styles.keyboard}>
      {letters.map((letter) => (
        <Button key={letter} text={letter} type="square" onClick={() => {}} />
      ))}
    </div>
  );
}
