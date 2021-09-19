import { Alert, Button, Snackbar, TextField } from "@mui/material";
import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { User as UserData, useFindUsersQuery } from "../generated-types";
import { useAppDispatch } from "../app/hooks";
import { setUser } from "../features/user/userSlice";
import { useHistory } from "react-router-dom";
import loginIconTop from "../styles/vectors/login-icon-top.svg";
import loginIconBottom from "../styles/vectors/login-icon-bottom.svg";
import darkBlueWaves from "../styles/vectors/dark-blue-waves.svg";
import lightBlueWaves from "../styles/vectors/light-blue-waves.svg";

export const Login: React.FC = () => {
    const dispatch = useAppDispatch();
    const history = useHistory();

    const [emailAddress, setEmailAddress] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [showError, setShowError] = useState(false);
    const findUsersQuery = useFindUsersQuery();

    const loginUser = async (
        email: string,
        password: string
    ): Promise<UserData | null> => {
        const auth = getAuth();

        try {
            const result = await signInWithEmailAndPassword(auth, email, password);

            const users = findUsersQuery.data?.findUsers;
            const user = users?.items.find((e) => e?.authId == result.user.uid);
            if (!user) return null;
            return user;
        } catch (e) {
            console.error("Caught error: ", e);
            setShowError(true);
            return null;
        }
    };

    const handleSubmit = async () => {
        console.log("Handling submit");

        const res = await loginUser(emailAddress, password);
        console.log("Login result", res);

        if (!res) return;

        dispatch(setUser(res))
        localStorage.setItem("currentUser", res._id)
        localStorage.setItem("loginTime", ((new Date).getTime() / 1000).toString())

        history.push("/home");
    };

    return (
        <div className=" auth-screen login-screen">
            <div className="auth-container">
                <div className="auth-header">
                    <h2>Log in</h2>
                </div>
                <div className="auth-fields">
                    <TextField
                        label="Email Address"
                        name="email"
                        value={emailAddress}
                        onChange={(e) => setEmailAddress(e.target.value)}
                        className="login-field email-field"
                    />
                    <TextField
                        label="Password"
                        name="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="auth-field password-field"
                    />
                </div>
                <div className="login-button">
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        onClick={handleSubmit}
                        className="auth-button"
                    >
                        Log in
                    </Button>
                </div>
                <div className="signup-text">
                    <p>
                        Not registered?{" "}
                        <span
                            className="signup-link"
                            onClick={() => history.push("/signup")}
                        >
                            Sign Up
                        </span>
                    </p>
                </div>
                <Snackbar
                    open={showError}
                    autoHideDuration={10000}
                    onClose={() => setShowError(false)}
                >
                    <Alert severity="error">
                        Failed to login, please check your input and try again
                    </Alert>
                </Snackbar>
            </div>
            <img className="login-icon top" src={loginIconTop} />
            <img className="login-icon bottom" src={loginIconBottom} />
            <img className="footer-waves dark-waves" src={darkBlueWaves} />
            <img className="footer-waves light-waves" src={lightBlueWaves} />
        </div>
    );
};
