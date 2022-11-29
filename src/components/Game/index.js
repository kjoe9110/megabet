import classnames from "classnames";
import { useState } from "react";
import { Collapse } from "react-collapse";
import styles from "./styles.module.scss";

export default function Game({ data }) {
  const [collapsed, setCollapsed] = useState();
  const [betTo, setBetTo] = useState();
  const [betAmount, setBetAmount] = useState();

  const handleUpdateBet = (e) => {
    setBetAmount(e.target.value);
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.gameHeader}
        onClick={() => setCollapsed(!collapsed)}
      >
        <b>Team A</b> {(data / 60).toFixed(0)} hours <b>Team B</b>
      </div>
      <Collapse
        theme={{ collapse: styles.collapse, content: styles.content }}
        isOpened={collapsed}
      >
        <div className={styles.betDetails}>
          <div
            className={classnames(styles.btnBet, {
              [styles.active]: betTo === "A",
            })}
            onClick={() => setBetTo("A")}
          />
          Team A
          <input
            placeholder="BET"
            type="number"
            value={betAmount}
            onChange={handleUpdateBet}
          />
          Team B
          <div
            className={classnames(styles.btnBet, {
              [styles.active]: betTo === "B",
            })}
            onClick={() => setBetTo("B")}
          />
        </div>
        <div className={styles.betDetail}>
          You bet <b>{betAmount}</b> on <b>Team {betTo}</b>
        </div>
      </Collapse>
    </div>
  );
}
