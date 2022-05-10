import styles from './app.module.css';
import Login from './components/pages/login/login';
import { Route, Routes } from 'react-router-dom';
import Main from './components/pages/main';

function App({ authService, FileInput, playerRepository }) {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<Login authService={authService} />} />
        <Route
          path="/main/*"
          element={
            <Main
              authService={authService}
              FileInput={FileInput}
              playerRepository={playerRepository}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
