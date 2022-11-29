import classnames from "classnames";
import styles from "./styles.module.scss";

export default function Carousel({ activeIndex, games, onChange }) {
  return (
    <section
      className={classnames(styles.container, styles[`active${activeIndex}`])}
    >
      {games.map(({ name, background }, index) => (
        <div
          key={index}
          className={styles.item}
          style={{ background }}
          onClick={() => onChange(index)}
        >
          {name}
        </div>
      ))}
    </section>
  );
}
