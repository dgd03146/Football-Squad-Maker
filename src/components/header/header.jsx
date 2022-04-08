import React, { useContext } from "react";
import styles from "./header.module.css";
import logo from "../../images/logo.png";
import { NavLink } from "react-router-dom";
import AuthContext from "../../store/auth-context";

const Header = ({ authService }) => {
  const ctx = useContext(AuthContext);

  const onLogout = () => {
    authService.logout();
  };

  return (
    <header className={styles.header}>
      {ctx.isLoggedIn && (
        <button className={styles.logout} onClick={onLogout}>
          Logout
        </button>
      )}
      <img className={styles.logo} src={logo} alt="logo" />
      <h1 className={styles.title}>Football Squad Maker</h1>
      {ctx.isLoggedIn && (
        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink to="/players" className={(navData) => (navData.isActive ? styles.active : "")}>
                Players
              </NavLink>
            </li>
            <li>
              <NavLink to="/squad" className={(navData) => (navData.isActive ? styles.active : "")}>
                Squad
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
