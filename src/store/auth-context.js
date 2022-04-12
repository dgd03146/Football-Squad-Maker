import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

const AuthContext = React.createContext({
  isLoggedIn: false,
  login: (user) => {},
  logOut: () => {},
  players: [],
  addPlayer: (player) => {},
  removePlayer: (id) => {}
});

export const AuthContextProvider = (props) => {
  let navigate = useNavigate();
  const goToMain = (userId) => {
    navigate("/main", { state: userId });
  };

  const goToLogin = () => {
    navigate("/");
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logInHandler = (user) => {
    setIsLoggedIn(true);
    goToMain(user.uid);
  };

  const logOutHandler = () => {
    setIsLoggedIn(false);
    goToLogin();
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, login: logInHandler, logOut: logOutHandler }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
