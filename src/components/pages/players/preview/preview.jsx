import React from 'react';

import PlayerCards from './playerCards';
import styles from './preview.module.css';

const Preview = (props) => {
  return (
    <section className={styles.preview}>
      <h1 className={styles.title}>Players</h1>
      <PlayerCards />
    </section>
  );
};

export default Preview;
