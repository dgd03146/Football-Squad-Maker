import React, { useEffect, useContext, useState } from 'react';
import Footer from '../layout/footer/footer';
import Header from '../layout/header/header';
import styles from './main.module.css';
import AuthContext from '../../store/auth-context';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Players from './players/players';
import Squad from './squad';

const Main = ({ authService, FileInput, playerRepository }) => {
  let navigate = useNavigate();
  const goToLogin = () => {
    navigate('/');
  };

  const navigateState = useLocation().state;
  const [userId, setUserId] = useState(navigateState && navigateState.id);
  const ctx = useContext(AuthContext);

  useEffect(() => {
    if (!userId) {
      // if no user return
      return;
    }
    const stopSync = playerRepository.syncCards(userId, (players) => {
      ctx.syncPlayers(players);
    });
    return () => stopSync();
  }, [userId]);

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        goToLogin();
      }
    });
  });

  return (
    <section className={styles.main}>
      <Header
        className={styles.header}
        authService={authService}
        userId={userId}
      />
      <div className={styles.contents}>
        <Routes>
          <Route
            path="players"
            element={
              <Players
                FileInput={FileInput}
                playerRepository={playerRepository}
                userId={userId}
              />
            }
          />
          <Route path="squad" element={<Squad />} />
        </Routes>
      </div>
      <Footer className={styles.footer} />
    </section>
  );
};

export default Main;
