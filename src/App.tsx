import React, { useEffect, useState } from "react";
import "./styles/main.scss";
import { Route, BrowserRouter as Router, Switch, useHistory } from "react-router-dom";
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
import { useFindUsersQuery, User as UserData } from "./generated-types";
import { setUser } from "./features/user/userSlice";
import { useAppDispatch } from "./app/hooks";

const App: React.FC = () => {
  const [userId, setUserId] = useState<string | undefined>(undefined)
  const findUsersQuery = useFindUsersQuery()
  const dispatch = useAppDispatch()
  const history = useHistory()

  useEffect(() => {
    const userId = localStorage.getItem("currentUser")
    const loginTime = Number.parseInt(localStorage.getItem("loginTime") ?? "100000")
    if (loginTime > 3600) {
      localStorage.removeItem("currentUser")
      localStorage.removeItem("loginTime")
    } else {
      setUserId(userId ?? undefined)
      handleLogin()
    }
  }, [])

  const loginUser = async (): Promise<UserData | null> => {
    if (userId === undefined) return null;
    try {
      const users = findUsersQuery.data?.findUsers;
      const user = users?.items.find((e) => e?.authId == userId);
      if (!user) return null;
      return user;
    } catch (e) {
      console.error("Caught error: ", e);
      return null;
    }
  };

  const handleLogin = async () => {
    if (userId === undefined) return;
    console.log("Handling submit")

    const res = await loginUser()
    console.log("Login result", res)

    if (!res) return

    dispatch(setUser(res))
    localStorage.setItem("currentUser", res._id)
    localStorage.setItem("loginTime", ((new Date).getTime() / 1000).toString())

    history.push("/home")
  }

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
          <PrivateRoute path="/chat-session/:id">
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
