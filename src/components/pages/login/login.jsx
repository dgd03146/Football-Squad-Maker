import React, { useEffect, useContext } from 'react';
import Footer from '../../layout/footer/footer';
import Header from '../../layout/header/header';
import styles from './login.module.css';
import AuthContext from '../../../store/auth-context';

const Login = ({ authService }) => {
  const ctx = useContext(AuthContext);

  const onLogin = (event) => {
    authService //
      .login(event.currentTarget.textContent);
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        ctx.login(user);
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
