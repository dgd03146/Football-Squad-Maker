import React, { useContext } from 'react';
import styles from './playerCards.module.css';
import PlayerCard from '../playerCard/playerCard';
import AuthContext from '../../../../../store/auth-context';

const PlayerCards = (props) => {
  const playerCtx = useContext(AuthContext);

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
