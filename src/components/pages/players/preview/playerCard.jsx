import React from 'react';
import styles from './playerCard.module.css';
import Card from '../../../layout/card/card';
import messi from '../../../../images/messi.jpg';
import neymar from '../../../../images/neymar.jpg';

const PlayerCard = (props) => {
  return (
    <Card className={styles.card}>
      <div className={styles.container}>
        <div className={styles.leftBox}>
          <p className={styles.position}>{props.position}</p>
          <img className={styles.nation} src={neymar} alt="nation" />
        </div>
        <img className={styles.face} src={props.url} alt="face" />
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.name}>{props.name}</h1>
        <p className={styles.nickname}>{props.nickname}</p>
      </div>
    </Card>
  );
};

export default PlayerCard;
