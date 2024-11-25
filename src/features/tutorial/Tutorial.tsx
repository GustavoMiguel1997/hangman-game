import { useNavigate } from "react-router-dom";

import { Button } from "@components/Button/Button";
import { Section } from "./components/Section/Section";

import backIcon from "@assets/images/icon-back.svg";

import styles from "./Tutorial.module.scss";

export function Tutorial() {
  const navitate = useNavigate();

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Button
          type="secondary"
          size="medium"
          isRounded
          icon={<img src={backIcon} />}
          onClick={() => navitate(-1)}
        />
        <h1>How to Play</h1>
      </header>
      <div className={styles.sections}>
        <Section
          title="01"
          subtitle="CHOOSE A CATEGORY"
          description="First, choose a word category, like animals or movies. The computer then randomly selects a secret word from that topic and shows you blanks for each letter of the word."
        />
        <Section
          title="01"
          subtitle="CHOOSE A CATEGORY"
          description="First, choose a word category, like animals or movies. The computer then randomly selects a secret word from that topic and shows you blanks for each letter of the word."
        />
        <Section
          title="01"
          subtitle="CHOOSE A CATEGORY"
          description="First, choose a word category, like animals or movies. The computer then randomly selects a secret word from that topic and shows you blanks for each letter of the word."
        />
      </div>
    </div>
  );
}
