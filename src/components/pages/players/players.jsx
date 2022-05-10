import React from 'react';
import Editor from './editor/editor';
import Preview from './preview/preview';
import styles from './players.module.css';

const Players = ({ FileInput, playerRepository, userId }) => {
  return (
    <section className={styles.players}>
      <Editor
        FileInput={FileInput}
        playerRepository={playerRepository}
        userId={userId}
      />
      <Preview />
    </section>
  );
};

export default Players;
