import EditForm from './editForm/editForm';
import styles from './editor.module.css';
import AuthContext from '../../../../store/auth-context';
import { useContext } from 'react';
import AddForm from './addForm/addForm';

const Editor = (props) => {
  const playerCtx = useContext(AuthContext);

  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>CREATE PLAYER</h1>
      <ul className={styles.ul}>
        {playerCtx.players.map((player) => {
          return (
            <EditForm
              key={player.id}
              name={player.name}
              position={player.position}
              country={player.country}
              color={player.color}
              nickname={player.nickname}
              url={player.nickname}
            />
          );
        })}
        <AddForm />
      </ul>
    </section>
  );
};

export default Editor;
