import React, { useContext, useEffect, useState } from 'react';
import styles from './playerCards.module.css';
import AuthContext from '../../../../store/auth-context';
import PlayerCard from './playerCard';

const PlayerCards = (props) => {
  const [players, setPlayers] = useState([]);

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
          position: responseData[key].player.position
        });
      }

      setPlayers(loadedPlayers);
    };

    fetchPlayers();
  }, [players]);

  return (
    <ul className={styles.ul}>
      {players.map((card) => {
        return <PlayerCard key={card.id} name={card.name} position={card.position} nickname={card.nickname} />;
      })}
    </ul>
  );
};

export default PlayerCards;
