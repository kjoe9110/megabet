import classnames from "classnames";
import styles from "./styles.module.scss";

export default function Carousel({ activeGame, games, onChange }) {
  return (
    <section
      className={classnames(styles.container, styles[`active${activeGame}`])}
    >
      {games.map((game, index) => (
        <div
          key={index}
          className={styles.item}
          onClick={() => onChange(index + 1)}
        >
          {game}
        </div>
      ))}
    </section>
  );
}
