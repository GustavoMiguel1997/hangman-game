import { Button } from "@components/Button/Button";

import styles from "./Header.module.scss";

type Props = {
  title?: string;
  icon: string;
  children?: React.ReactNode;
  onClick: () => void;
};

export function Header({ title, icon, children, onClick }: Props) {
  return (
    <header className={styles.header}>
      <Button
        type="secondary"
        size="medium"
        isRounded
        icon={<img src={icon} />}
        onClick={onClick}
      />
      {title && <h1>{title}</h1>}
      {children}
    </header>
  );
}
