import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { initializeApp } from "firebase/app";

initializeApp({
  apiKey: "AIzaSyCd9fs_oR5Z-e6nDuqidXOmXG3nqIesutY",
  authDomain: "dipole-space.firebaseapp.com",
  projectId: "dipole-space",
  storageBucket: "dipole-space.appspot.com",
  messagingSenderId: "496913747694",
  appId: "1:496913747694:web:4e3c11adecbaa1add42dff",
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
