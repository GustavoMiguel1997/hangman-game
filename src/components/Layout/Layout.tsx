import styles from "./Layout.module.scss";

type Props = {
  children: React.ReactNode;
};

export function Layout({ children }: Props) {
  return <div className={styles.layout}>{children}</div>;
}
