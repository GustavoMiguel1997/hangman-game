import { useGameStore } from "@stores/gameStore";

import { Header } from "@components/Header/Header";

import { LettersGroup } from "./components/LettersGroup/LettersGroup";
import { Keyboard } from "./components/Keyboard/Keyboard";

import menuIcon from "@assets/images/icon-menu.svg";
import lifeIcon from "@assets/images/icon-heart.svg";

import styles from "./Game.module.scss";
import { generateAlphabetArray } from "./utils/alphabet";

export function Game() {
  const store = useGameStore();
  const letters = generateAlphabetArray();

  return (
    <div className={styles.container}>
      <Header icon={menuIcon} onClick={() => {}}>
        <div className={styles.header}>
          <h1>{store.category}</h1>
          <div className={styles.healthContainer}>
            <div className={styles.healthBar}>
              <div
                className={styles.healthFill}
                style={{ width: `${store.life}%` }}
              ></div>
            </div>
            <img src={lifeIcon} />
          </div>
        </div>
      </Header>
      <main className={styles.main}>
        <LettersGroup />
        <Keyboard letters={letters} />
      </main>
    </div>
  );
}
