import React, { useEffect, useState, useContext } from 'react';
import styles from './playerCards.module.css';
import PlayerCard from '../playerCard/playerCard';
import AuthContext from '../../../../../store/auth-context';

const PlayerCards = (props) => {
  // const [players, setPlayers] = useState([]);

  const playerCtx = useContext(AuthContext);

  // useEffect(() => {
  //   const fetchPlayers = async () => {
  //     const response = await fetch(
  //       'https://squad-maker-default-rtdb.firebaseio.com/players.json'
  //     );
  //     const responseData = await response.json();

  //     const updated = { ...playerCtx.players };

  //     for (const key in responseData) {
  //       updated[responseData.id] = {
  //         id: key,
  //         color: responseData[key].player.color,
  //         country: responseData[key].player.country,
  //         name: responseData[key].player.name,
  //         nickname: responseData[key].player.nickname,
  //         position: responseData[key].player.position,
  //         url: responseData[key].player.url
  //       };
  //     }

  //     setPlayers(loadedPlayers);
  //   };

  //   fetchPlayers();
  // }, []);

  return (
    <ul className={styles.ul}>
      {Object.keys(playerCtx.players).map((key) => {
        const player = playerCtx.players[key];
        return (
          <PlayerCard
            key={key}
            name={player.name}
            color={player.color}
            position={player.position}
            url={player.url}
            nickname={player.nickname}
          />
        );
      })}
    </ul>
  );
};

export default PlayerCards;
