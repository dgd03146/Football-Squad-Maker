import React, { useRef, useContext } from 'react';
import AuthContext from '../../../../../store/auth-context';
import Position from '../position/position';
import { CountryDropdown } from 'react-country-region-selector';
import styles from './editForm.module.css';
import Card from '../../../../layout/card/card';

const EditForm = ({ card, FileInput, playerRepository, userId }) => {
  const playerCtx = useContext(AuthContext);

  const { name, color, position, country, nickname, url, fileName } = card;

  const onChange = (event) => {
    if (event.currentTarget == null) {
      return;
    }

    event.preventDefault();

    const updatedCard = {
      ...card,
      [event.currentTarget.name]: event.currentTarget.value
    };

    playerCtx.updatePlayer(updatedCard);
    playerRepository.saveCard(userId, updatedCard);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    playerCtx.deletePlayer(card);
    playerRepository.removeCard(userId, card);
  };

  const onFileChange = (file) => {
    const updatedCard = {
      ...card,
      fileName: file.name,
      url: file.url
    };
    playerCtx.updatePlayer(updatedCard);
    playerRepository.saveCard(userId, updatedCard);
  };

  return (
    <Card>
      <form className={styles.creator} onSubmit={onSubmit}>
        <div className={styles.firstRow}>
          <div className={styles.nameContainer}>
            <label className={styles.label} htmlFor="name">
              NAME
            </label>
            <input
              className={styles.name}
              name="name"
              type="text"
              value={name}
              onChange={onChange}
            />
          </div>
          <div className={styles.colorContainer}>
            <label className={styles.label} htmlFor="color">
              COLOR
            </label>
            <select name="color" value={color} onChange={onChange}>
              <option value="Gold">Gold</option>
              <option value="Silver">Silver</option>
              <option value="Bronze">Bronze</option>
            </select>
          </div>
        </div>
        <label className={styles.label} htmlFor="position">
          POSITION
        </label>
        <Position position={position} onChange={onChange} />
        <label className={styles.label} htmlFor="country">
          COUNTRY
        </label>
        <CountryDropdown
          name="country"
          value={country}
          // onChange={(val) => selectCountry(val)}
        />
        <label className={styles.label} htmlFor="nickname">
          NICKNAME
        </label>
        <input
          className={styles.name}
          name="nickname"
          type="text"
          value={nickname}
          onChange={onChange}
        />
        <label className={styles.label} htmlFor="image">
          Choose an image from your phone or computer
        </label>
        <div className={styles.upload}>
          <div className={styles.fileInput}>
            <FileInput onFileChange={onFileChange} name={fileName} />
          </div>
          <button type="submit" className={styles.delete}>
            Delete
          </button>
        </div>
      </form>
    </Card>
  );
};
export default EditForm;
