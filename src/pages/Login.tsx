import { Box, Button, Checkbox, Container, FormControlLabel, TextField } from "@mui/material";
import React, { useState } from "react";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    Auth,
    UserCredential,
} from "firebase/auth";
import {
    User as UserData,
    useCreateUserMutation,
    useUpdateUserMutation,
    useFindUsersQuery,
} from "../generated-types"

export const Login: React.FC = () => {
    const [emailAddress, setEmailAddresss] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const findUsersQuery = useFindUsersQuery()

    const loginUser = async (
        email: string,
        password: string
    ): Promise<UserData | null> => {
        ;
        const auth = getAuth();

        try {
            const result = await signInWithEmailAndPassword(auth, email, password);

            const users = findUsersQuery.data?.findUsers;
            const user = users?.items.find((e) => e?.authId == result.user.uid);
            if (!user) return null;
            return user;
        } catch (e) {
            console.error("Caught error: ", e);
            return null;
        }
    };

    const handleSubmit = async () => {
        console.log("Handling submit")

        const res = await loginUser(emailAddress, password)
        console.log("Login result", res)
    }

    return (
        <Container>
            <Box>
                <TextField
                    label="Email Address"
                    name="email"
                    value={emailAddress}
                    onChange={e => setEmailAddresss(e.target.value)}
                />
                <TextField
                    label="Password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <FormControlLabel
                    control={<Checkbox value="rembember" color="primary" />}
                    label="Remember me"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    onClick={handleSubmit}
                >
                    Sign In
                </Button>
            </Box>
        </Container>
    )
}
