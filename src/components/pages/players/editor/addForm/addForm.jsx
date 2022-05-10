import React, { useRef, useState, useContext } from 'react';
import AuthContext from '../../../../../store/auth-context';
import Position from '../position/position';
import { CountryDropdown } from 'react-country-region-selector';
import styles from './addForm.module.css';
import Card from '../../../../layout/card/card';

const AddForm = ({ FileInput, playerRepository, userId }) => {
  const playerCtx = useContext(AuthContext);
  const [file, setFile] = useState({ fileName: null, url: null });
  const [country, setCountry] = useState('');

  const formRef = useRef();
  const nameRef = useRef();
  const colorRef = useRef();
  const positionRef = useRef();
  const nicknameRef = useRef();

  const selectCountry = (val) => {
    setCountry(val);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const card = {
      id: Date.now(),
      name: nameRef.current.value || '',
      color: colorRef.current.value,
      position: positionRef.current.value || '',
      country: country,
      nickname: nicknameRef.current.value || '',
      fileName: file.fileName || '',
      url: file.url || ''
    };

    formRef.current.reset();
    setFile({ fileName: null, url: null });
    playerCtx.updatePlayer(card);
    playerRepository.saveCard(userId, card);
  };

  const onFileChange = (file) => {
    setFile({ fileName: file.name, url: file.url });
  };

  return (
    <Card>
      <form ref={formRef} className={styles.creator}>
        <div className={styles.firstRow}>
          <div className={styles.nameContainer}>
            <label className={styles.label} htmlFor="name">
              NAME
            </label>
            <input
              className={styles.name}
              name="name"
              type="text"
              ref={nameRef}
            />
          </div>
          <div className={styles.colorContainer}>
            <label className={styles.label} htmlFor="color">
              COLOR
            </label>
            <select name="color" ref={colorRef}>
              <option placeholder="Gold">Gold</option>
              <option placeholder="Silver">Silver</option>
              <option placeholder="Bronze">Bronze</option>
            </select>
          </div>
        </div>
        <label className={styles.label} htmlFor="position">
          POSITION
        </label>
        <Position positionRef={positionRef} />
        <label className={styles.label} htmlFor="country">
          COUNTRY
        </label>
        <CountryDropdown onChange={(val) => selectCountry(val)} />
        <label className={styles.label} htmlFor="nickname">
          NICKNAME
        </label>
        <input
          className={styles.name}
          name="nickname"
          type="text"
          ref={nicknameRef}
        />
        <label className={styles.label} htmlFor="image">
          Choose an image from your phone or computer
        </label>
        <div className={styles.upload}>
          <div className={styles.fileInput}>
            <FileInput onFileChange={onFileChange} name={file.fileName} />
          </div>
          <button className={styles.add} onClick={onSubmit}>
            ADD
          </button>
        </div>
      </form>
    </Card>
  );
};
export default AddForm;
