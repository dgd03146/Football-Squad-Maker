import React, { useReducer } from 'react';

const AuthContext = React.createContext({
  players: {},

  login: (user) => {},
  logOut: () => {},
  updatePlayer: (player) => {},
  deletePlayer: (player) => {},
  syncPlayers: (players) => {}
});

const defaultPlayerState = {
  players: {}
};

const playerReducer = (state, action) => {
  if (action.type === 'UPDATE') {
    const updatedPlayers = { ...state.players };
    updatedPlayers[action.player.id] = action.player;
    return {
      players: updatedPlayers
    };
  }
  if (action.type === 'DELETE') {
    const updatedPlayers = { ...state.players };
    delete updatedPlayers[action.player.id];
    return {
      players: updatedPlayers
    };
  }
  if (action.type === 'SYNC') {
    const updatedPlayers = { ...action.players };
    return {
      players: updatedPlayers
    };
  }

  return defaultPlayerState;
};

export const AuthContextProvider = (props) => {
  const [playerState, dispatchPlayerAction] = useReducer(
    playerReducer,
    defaultPlayerState
  );

  const updatePlayerHandler = (player) => {
    dispatchPlayerAction({ type: 'UPDATE', player: player });
  };

  const deletePlayerHandler = (player) => {
    dispatchPlayerAction({ type: 'DELETE', player: player });
  };

  const syncPlayersHandler = (players) => {
    dispatchPlayerAction({ type: 'SYNC', players: players });
  };

  return (
    <AuthContext.Provider
      value={{
        players: playerState.players,

        updatePlayer: updatePlayerHandler,
        deletePlayer: deletePlayerHandler,
        syncPlayers: syncPlayersHandler
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
