import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import AuthService from "./service/auth_service";
import { firebaseApp } from "./service/firebase";
import dotenv from "dotenv";

const authService = new AuthService(firebaseApp);
dotenv.config();

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} />
  </React.StrictMode>,
  document.getElementById("root")
);
