import React, { useEffect } from 'react';
import Footer from '../../layout/footer/footer';
import Header from '../../layout/header/header';
import styles from './login.module.css';

import { useNavigate } from 'react-router-dom';

const Login = ({ authService }) => {
  let navigate = useNavigate();
  const goToPlayer = (userId) => {
    navigate('/main/players', { state: { id: userId } });
  };

  const onLogin = (event) => {
    authService //
      .login(event.currentTarget.textContent)
      .then((data) => goToPlayer(data.user.uid));
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        goToPlayer(user.uid);
      }
    });
  });

  return (
    <section className={styles.login}>
      <Header />
      <section>
        <h1>Login</h1>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              Google
            </button>
          </li>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              Github
            </button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
};

export default Login;
