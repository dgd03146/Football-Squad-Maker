import React from 'react';
import styles from './header.module.css';
import logo from '../../../images/logo.png';
import { NavLink } from 'react-router-dom';

const Header = ({ authService, userId }) => {
  const onLogout = () => {
    authService.logout();
  };

  return (
    <header className={`${styles['header']} ${!onLogout && styles.home}`}>
      {onLogout && userId && (
        <button className={styles.logout} onClick={onLogout}>
          Logout
        </button>
      )}
      <img className={styles.logo} src={logo} alt="logo" />
      <h1 className={styles.title}>Football Squad Maker</h1>
      {onLogout && userId && (
        <nav>
          <ul>
            <li>
              <NavLink
                to="/main/players"
                className={(navData) => (navData.isActive ? styles.active : '')}
              >
                Players
              </NavLink>
            </li>
            <li className={styles.list}>
              <NavLink
                to="/main/squad"
                className={(navData) => (navData.isActive ? styles.active : '')}
              >
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
