import React, { useEffect, useContext } from "react";
import Footer from "../layout/footer/footer";
import Header from "../layout/header/header";
import styles from "./main.module.css";
import AuthContext from "../../store/auth-context";
import { Routes, Route } from "react-router-dom";
import Players from "./players/players";
import Squad from "./squad";

const Main = ({ authService }, props) => {
  const ctx = useContext(AuthContext);
  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        ctx.logOut();
      }
    });
  });

  return (
    <section className={styles.main}>
      <Header className={styles.header} authService={authService} />
      <div className={styles.contents}>
        <Routes>
          <Route path="players" element={<Players />} />
          <Route path="squad" element={<Squad />} />
        </Routes>
      </div>
      <Footer className={styles.footer} />
    </section>
  );
};

export default Main;
