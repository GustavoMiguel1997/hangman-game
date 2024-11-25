import styles from "./Section.module.scss";

type Props = {
  title: string;
  subtitle: string;
  description: string;
};

export function Section({ title, subtitle, description }: Props) {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      <h3 className={styles.subtitle}>{subtitle}</h3>
      <p className={styles.description}>{description}</p>
    </section>
  );
}
