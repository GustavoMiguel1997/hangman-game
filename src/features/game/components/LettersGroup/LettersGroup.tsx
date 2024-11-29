import { Letter } from "../Letter/Letter";

import styles from "./LettersGroup.module.scss";

const word = "The Silence of the Lambs";
const SIZE_LIMIT = 10;

export function LettersGroup() {
  function getGroups() {
    const groups = word.split(" ");

    const teste = groups.reduce((acc, current, index) => {
      const next = groups[index + 1];

      if (next && !acc.includes(`${current} ${next}`)) {
        const totalSize = current.length + next.length;
        if (totalSize <= SIZE_LIMIT) acc.push(`${current} ${next}`);
      } else {
        acc.push(current);
      }

      return acc;
    }, [] as string[]);

    console.log(teste, groups);

    return groups;
  }

  const groups = getGroups();

  return (
    <div className={styles.lettersGroup}>
      {groups.map((word) => (
        <div className={styles.group}>
          {word.split("").map((letter, index) => (
            <Letter
              key={index}
              letter={letter}
              type={
                letter === "*" ? "hidden" : letter === " " ? "space" : "visible"
              }
            />
          ))}
        </div>
      ))}
    </div>
  );
}
