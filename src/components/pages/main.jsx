import React, { useEffect, useContext } from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./main.module.css";
import AuthContext from "../../store/auth-context";

const Main = ({ authService }) => {
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
      <Header authService={authService} />
      <Footer />
    </section>
  );
};

export default Main;
