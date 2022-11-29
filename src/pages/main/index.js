import { useEffect, useState } from "react";
import Carousel from "../../components/Carousel";
import Game from "../../components/Game";
import styles from "./styles.module.scss";

const GAMES = ["NFL", "NBA", "MLB", "MLS", "NHL"];

export default function MainPage() {
  const [activeGame, setActiveGame] = useState(1);
  const [gameData, setGameData] = useState([]);

  const fetchGameData = async () => {
    const res = await fetch(
      "https://cors-proxy-wild.herokuapp.com/http://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=5"
    );
    const data = await res.json();
    setGameData(data);
  };

  useEffect(() => {
    const id = setInterval(() => fetchGameData(activeGame), 1000 * 60)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    fetchGameData(activeGame);
  }, [activeGame]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>MEGABET V1</h1>
      <Carousel
        activeGame={activeGame}
        games={GAMES}
        onChange={setActiveGame}
      />
      <div className={styles.gameList}>
        {gameData.map((data, index) => (
          <Game key={`${activeGame}-${index}`} data={data} />
        ))}
      </div>
    </div>
  );
}
