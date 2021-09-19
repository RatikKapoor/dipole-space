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
import { PrivateRoute } from "./components/common/PrivateRoute"
import { Landing } from "./pages/Landing";
import { HobbySelect } from "./pages/HobbySelect";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Switch>
          <PrivateRoute path="/hobby-select">
            <HobbySelect />
          </PrivateRoute>
          <PrivateRoute path="/chat">
            <Chat />
          </PrivateRoute>
          <PrivateRoute path="/chata">
            <ChatWindow />
          </PrivateRoute>
          <PrivateRoute path="/matching">
            <Matching />
          </PrivateRoute>
          <PrivateRoute path="/feed">
            <Feed />
          </PrivateRoute>
          <PrivateRoute path="/home">
            <Home />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
