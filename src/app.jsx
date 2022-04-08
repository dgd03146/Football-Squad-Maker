import styles from "./app.module.css";
import Login from "./components/login/login";
import { Route, Routes, useNavigate } from "react-router-dom";
import Main from "./components/pages/main";
import Players from "./components/pages/players";
import Squad from "./components/pages/squad";
import { useContext } from "react";
import AuthContext from "./store/auth-context";

function App({ authService }) {
  let navigate = useNavigate();
  const ctx = useContext(AuthContext);

  // if (authService.user) {
  //   ctx.login().then(navigate("/main"));
  // }
  return (
    <div className={styles.app}>
      <Routes>
        <Route exact path="/" element={<Login authService={authService} />} />
        <Route path="/main" element={<Main authService={authService} />} />
        <Route path="/players" element={<Players />}></Route>
        <Route path="squad" element={<Squad />}></Route>
      </Routes>
    </div>
  );
}

export default App;
