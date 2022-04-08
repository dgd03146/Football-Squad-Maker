import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import AuthService from "./service/auth_service";
import { firebaseApp } from "./service/firebase";
import dotenv from "dotenv";
import { AuthContextProvider } from "./store/auth-context";
import { BrowserRouter } from "react-router-dom";

const authService = new AuthService(firebaseApp);
dotenv.config();

ReactDOM.render(
  <BrowserRouter>
    <AuthContextProvider>
      <App authService={authService} />
    </AuthContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
