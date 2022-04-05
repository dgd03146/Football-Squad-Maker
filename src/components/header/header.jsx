import React from "react";
import styles from "./header.module.css";
import logo from "../../images/logo.png";

const Header = ({ onLogout }) => (
  <header className={styles.header}>
    {true && (
      <button className={styles.logout} onClick={onLogout}>
        Logout
      </button>
    )}
    <img className={styles.logo} src={logo} alt="" />
    <h1 className={styles.title}>Football Squad Maker</h1>
  </header>
);

export default Header;
