import React from "react";
import ReactDOM from "react-dom";
import "./styles/main.scss";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { initializeApp } from "firebase/app";
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

initializeApp({
  apiKey: "AIzaSyCd9fs_oR5Z-e6nDuqidXOmXG3nqIesutY",
  authDomain: "dipole-space.firebaseapp.com",
  projectId: "dipole-space",
  storageBucket: "dipole-space.appspot.com",
  messagingSenderId: "496913747694",
  appId: "1:496913747694:web:4e3c11adecbaa1add42dff",
});

const apolloClient = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
