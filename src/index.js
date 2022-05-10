import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import AuthService from './service/auth_service';
import { firebaseApp } from './service/firebase';
import dotenv from 'dotenv';
import { AuthContextProvider } from './store/auth-context';
import { BrowserRouter } from 'react-router-dom';
import ImageUploader from './service/image_uploader';
import ImageFileInput from './components/pages/players/editor/image_file_input/imageFileInput';
import PlayerRepository from './service/player_repository';

const authService = new AuthService(firebaseApp);
const imageUploader = new ImageUploader();
const playerRepository = new PlayerRepository();

const FileInput = (props) => (
  <ImageFileInput {...props} imageUploader={imageUploader} />
);
dotenv.config();

ReactDOM.render(
  <BrowserRouter>
    <AuthContextProvider>
      <App
        authService={authService}
        FileInput={FileInput}
        playerRepository={playerRepository}
      />
    </AuthContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
