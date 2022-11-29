import { useEffect, useState } from "react";
import Carousel from "../../components/Carousel";
import Game from "../../components/Game";
import styles from "./styles.module.scss";

const GAMES = [
  {
    name: "NFL",
    background: "#00BCD4",
  },
  {
    name: "NBA",
    background: "#4CAF50",
  },
  {
    name: "MLB",
    background: "#CDDC39",
  },
  {
    name: "MLS",
    background: "#FFC107",
  },
  {
    name: "NHL",
    background: "#FF5722",
  },
];

export default function MainPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [gameData, setGameData] = useState([0, 0, 0, 0, 0]);

  const fetchGameData = async () => {
    const res = await fetch(
      "https://cors-proxy-wild.herokuapp.com/http://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=5"
    );
    const data = await res.json();
    setGameData(data);
  };

  useEffect(() => {
    const id = setInterval(() => fetchGameData(activeIndex), 1000 * 60);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    fetchGameData(activeIndex);
  }, [activeIndex]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>MEGABET V1</h1>
      <Carousel
        activeIndex={activeIndex}
        games={GAMES}
        onChange={setActiveIndex}
      />
      <div className={styles.gameList}>
        {gameData.map((data, index) => (
          <Game
            key={`${activeIndex}-${index}`}
            defaultCollapsed={!index}
            game={GAMES[activeIndex]}
            data={data}
          />
        ))}
      </div>
    </div>
  );
}
