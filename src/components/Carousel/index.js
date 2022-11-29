import classnames from "classnames";
import { useState } from "react";
import styles from "./styles.module.scss";

export default function Carousel({ activeGame, games, onChange }) {
  return (
    <section
      className={classnames(styles.container, styles[`active${activeGame}`])}
    >
      {games.map(({ name }, index) => (
        <div
          key={index}
          className={styles.item}
          onClick={() => onChange(index + 1)}
        >
          {name}
        </div>
      ))}
    </section>
  );
}
