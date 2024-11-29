import { useNavigate } from "react-router-dom";
import { Button } from "@components/Button/Button";

import logo from "@assets/images/logo.svg";
import playIcon from "@assets/images/icon-play.svg";

import styles from "./Home.module.scss";

export function Home() {
  const navitate = useNavigate();

  return (
    <main className={styles.container}>
      <img className={styles.logo} src={logo} />
      <div className={styles.buttons}>
        <Button
          type="secondary"
          size="large"
          isRounded
          icon={<img src={playIcon} />}
          onClick={() => navitate("/category")}
        />
        <Button
          text="HOW TO PLAY"
          textSize="small"
          onClick={() => navitate("/tutorial")}
        />
      </div>
    </main>
  );
}
