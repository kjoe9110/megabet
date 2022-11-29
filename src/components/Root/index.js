import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../../pages/main";
import AboutPage from "../../pages/about";
import styles from "./styles.module.scss";

export default function Root() {
  const handleMetamask = () => {
    console.log("Metamask button clicked!");
  };
  return (
    <BrowserRouter>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <a className={styles.link} href="/">
            MAIN
          </a>
          <a className={styles.link} href="/about">
            ABOUT
          </a>
        </nav>
        <div className={styles.btnMetamask} onClick={handleMetamask}>
          <img src="./metamask-icon.png" alt="MetaMast" />
          Metamask
        </div>
      </header>
      <main>
        <Routes>
          <Route element={<MainPage />} path="/" />
          <Route element={<AboutPage />} path="/about" />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
