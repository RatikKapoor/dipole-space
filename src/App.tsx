import React from "react";
import "./styles/main.scss";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { Chat } from "./pages/Chat";
import { Matching } from "./pages/Matching";
import { Feed } from "./pages/Feed";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { ChatWindow } from "./pages/ChatWindow";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Switch>
          <Route path="/chat">
            <Chat />
          </Route>
          <Route path="/chata">
            <ChatWindow />
          </Route>
          <Route path="/matching">
            <Matching />
          </Route>
          <Route path="/feed">
            <Feed />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
