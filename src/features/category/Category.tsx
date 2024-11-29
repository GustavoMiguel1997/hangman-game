import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useGameStore } from "@stores/gameStore";

import { Header } from "@components/Header/Header";
import { Button } from "@components/Button/Button";

import backIcon from "@assets/images/icon-back.svg";
import data from "@data/data.json";

import styles from "./Category.module.scss";

export function Category() {
  const navitate = useNavigate();

  const store = useGameStore();

  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const categoriesKeys = Object.keys(data.categories);
    setCategories(categoriesKeys);
  }, []);

  function handleSelectCategory(category: string) {
    store.setCategory(category);
    navitate("/game");
  }

  return (
    <div className={styles.container}>
      <Header
        title="Pick a category"
        icon={backIcon}
        onClick={() => navitate(-1)}
      />
      <ul className={styles.list}>
        {categories.map((category) => (
          <li key={category}>
            <Button
              text={category}
              size="large"
              onClick={() => handleSelectCategory(category)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
