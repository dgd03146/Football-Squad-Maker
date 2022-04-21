import React, { useState, useReducer } from 'react';

import { useNavigate } from 'react-router-dom';

import son from '../images/son.jpg';

const AuthContext = React.createContext({
  players: [],

  isLoggedIn: false,
  login: (user) => {},
  logOut: () => {},
  addPlayer: (player) => {},
  removePlayer: (id) => {}
});

const defaultPlayerState = {
  players: [
    {
      id: 1,
      color: 'gold',
      country: 'Korea, Republic of',
      name: 'Son Heung Min',
      nickname: 'Sonsational',
      position: 'LW',
      fileName: '',
      url: son
    }
  ],

  isLoggedIn: false
};

const playerReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updatedPlayers = [...state.players, action.player];

    return {
      players: updatedPlayers
    };
  }
  if (action.type === 'REMOVE') {
  }
  return defaultPlayerState;
};

export const AuthContextProvider = (props) => {
  const [playerState, dispatchPlayerAction] = useReducer(playerReducer, defaultPlayerState);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  let navigate = useNavigate();
  const goToPlayer = (userId) => {
    navigate('/main/players', { state: userId });
  };

  const goToLogin = () => {
    navigate('/');
  };

  const logInHandler = (user) => {
    setIsLoggedIn(true);
    goToPlayer(user.uid);
  };

  const logOutHandler = () => {
    setIsLoggedIn(false);
    goToLogin();
  };

  const addPlayerHandler = (player) => {
    dispatchPlayerAction({ type: 'ADD', player: player });
  };

  const removePlayerHandler = (id) => {
    dispatchPlayerAction({ type: 'REMOVE', id: id });
  };

  return (
    <AuthContext.Provider
      value={{
        players: playerState.players,
        isLoggedIn: isLoggedIn,

        login: logInHandler,
        logOut: logOutHandler,
        addPlayer: addPlayerHandler,
        removePlayer: removePlayerHandler
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
