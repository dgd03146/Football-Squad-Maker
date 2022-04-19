import Card from '../../../layout/card/card';
import styles from './editor.module.css';
import Position from './position';
import React, { useRef, useState } from 'react';
import { CountryDropdown } from 'react-country-region-selector';
import { storage } from '../../../../service/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const Editor = (props) => {
  const [country, setCountry] = useState('');
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState(null);

  const selectCountry = (val) => {
    setCountry(val);
  };

  const nameRef = useRef();
  const colorRef = useRef();
  const positionRef = useRef();

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const imageRef = ref(storage, 'image');
    uploadBytes(imageRef, image).then(() => {
      getDownloadURL(imageRef)
        .then((url) => {
          setUrl(url);
        })
        .catch((error) => {
          console.log(error.message, 'error getting the image url');
        });
    });

    submitData();
  };

  const submitData = () => {
    console.log('hi');
    const player = {
      name: nameRef.current.value,
      color: colorRef.current.value,
      position: positionRef.current.value,
      country: country
    };

    fetch('https://squad-maker-default-rtdb.firebaseio.com/players.json', {
      method: 'POST',
      body: JSON.stringify({ player })
    });
  };

  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>CREATE PLAYER</h1>
      <Card className={styles.card}>
        <form className={styles.creator} onSubmit={onSubmit}>
          <div className={styles.firstRow}>
            <div className={styles.nameContainer}>
              <label className={styles.label} htmlFor="name">
                NAME
              </label>
              <input className={styles.name} id="name" type="text" placeholder="ADD NAME" ref={nameRef} />
            </div>
            <div className={styles.colorContainer}>
              <label className={styles.label} htmlFor="color">
                COLOR
              </label>
              <select name="color" id="color" ref={colorRef}>
                <option value="gold">Gold</option>
                <option value="silver">Silver</option>
                <option value="bronze">Bronze</option>
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
          <CountryDropdown value={country} onChange={(val) => selectCountry(val)} />
          <label className={styles.label} htmlFor="image">
            Choose an image from your phone or computer
          </label>
          <div className={styles.upload}>
            <label for="file">UPLOAD</label>
            <input type="file" id="file" onChange={handleImageChange} />
            <button type="submit" className={styles.upload}>
              ADD
            </button>
            <button type="button" className={styles.delete}>
              DELETE
            </button>
          </div>
        </form>
      </Card>
    </section>
  );
};

export default Editor;
