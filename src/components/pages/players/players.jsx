import React from "react";
import Editor from "./editor/editor";
import Preview from "./preview/preview";
import styles from "./players.module.css";

const Players = (props) => {
  return (
    <section className={styles.players}>
      <Editor />
      <Preview />
    </section>
  );
};

export default Players;
