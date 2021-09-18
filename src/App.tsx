import React from "react";
import "./styles/main.scss";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { Chat } from "./pages/Chat";
import { Profile } from "./pages/Profile";
import { Feed } from "./pages/Feed";
import { NavigationBar } from "./components/common/NavigationBar";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";

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
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/feed">
            <Feed />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <NavigationBar />
      </Router>
    </>
  );
};

export default App;
