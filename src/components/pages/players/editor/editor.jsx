import EditForm from './editForm/editForm';
import styles from './editor.module.css';
import AuthContext from '../../../../store/auth-context';
import { useContext } from 'react';
import AddForm from './addForm/addForm';

const Editor = ({ FileInput, playerRepository, userId }) => {
  const playerCtx = useContext(AuthContext);

  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>CREATE PLAYER</h1>
      <ul className={styles.ul}>
        {Object.keys(playerCtx.players).map((key) => {
          const player = playerCtx.players[key];
          return (
            <EditForm
              key={player.id}
              card={player}
              FileInput={FileInput}
              playerRepository={playerRepository}
              userId={userId}
            />
          );
        })}
        <AddForm
          FileInput={FileInput}
          playerRepository={playerRepository}
          userId={userId}
        />
      </ul>
    </section>
  );
};

export default Editor;
