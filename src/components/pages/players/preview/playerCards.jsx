import React, { useEffect, useState, useContext } from 'react';
import styles from './playerCards.module.css';
import PlayerCard from './playerCard';
import AuthContext from '../../../../store/auth-context';

const PlayerCards = (props) => {
  const [players, setPlayers] = useState([]);

  // const playerCtx = useContext(AuthContext);

  useEffect(() => {
    const fetchPlayers = async () => {
      const response = await fetch('https://squad-maker-default-rtdb.firebaseio.com/players.json');
      const responseData = await response.json();

      const loadedPlayers = [];

      for (const key in responseData) {
        loadedPlayers.push({
          id: key,
          color: responseData[key].player.color,
          country: responseData[key].player.country,
          name: responseData[key].player.name,
          nickname: responseData[key].player.nickname,
          position: responseData[key].player.position,
          url: responseData[key].player.url
        });
      }

      setPlayers(loadedPlayers);
    };

    fetchPlayers();
  }, [players]);

  return (
    <ul className={styles.ul}>
      {players.map((player) => {
        return (
          <PlayerCard
            key={player.id}
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
