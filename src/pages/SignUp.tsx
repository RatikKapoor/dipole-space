/* eslint-disable react/jsx-no-undef */
import { Box, Button, Container, TextField } from "@mui/material";
import React, { useState } from "react";
import { useCreateUserMutation, CreateUserInput, Gender } from '../generated-types'
import {
    getAuth,
    createUserWithEmailAndPassword,
} from "firebase/auth";

export const SignUp: React.FC = () => {
    const auth = getAuth()
    const [createUserMutation] = useCreateUserMutation()

    const [firstName, setFirstName] = useState<string>("")
    const [lastName, setLastName] = useState<string>("")
    const [phoneNumber, setPhoneNumber] = useState<string>("")
    const [gender] = useState<Gender>(Gender.Male)
    const [birthDay, setBirthDay] = useState<string>("")
    const [photoUrl, setPhotoUrl] = useState<string>("")
    const [bio, setBio] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const createUserWithPassword = async (): Promise<boolean> => {
        try {
            const result = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );

            console.log("Create user result", result)

            const data: CreateUserInput = {
                authId: result.user.uid,
                birthDate: birthDay,
                email: email,
                firstName: firstName,
                gender: gender,
                lastName: lastName,
                phoneNumber: phoneNumber,
                bio: bio,
                photoUrl: photoUrl,
            }

            console.log("Data", data)

            createUserMutation({ variables: { input: data } })

            return true;
        } catch (e) {
            console.error(e);
            return false;
        }
    }

    const handleSubmit = async (): Promise<void> => {
        await createUserWithPassword()
    }

    return (
        <Container>
            <Box>
                <TextField
                    label="First Name"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
                <TextField
                    label="Last Name"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                />
                <TextField
                    label="Phone Number"
                    value={phoneNumber}
                    onChange={e => setPhoneNumber(e.target.value)}
                />
                <TextField
                    label="Birthday"
                    value={birthDay}
                    onChange={e => setBirthDay(e.target.value)}
                />
                <TextField
                    label="Photo Url"
                    value={photoUrl}
                    onChange={e => setPhotoUrl(e.target.value)}
                />
                <TextField
                    label="Bio"
                    multiline={true}
                    value={bio}
                    onChange={e => setBio(e.target.value)}
                />
                {/* <Select
                    label="Gender"
                >
                    <MenuItem value={"female"}>Female</MenuItem>
                    <MenuItem value={"male"}>Male</MenuItem>
                    <MenuItem value={"other"}>Other</MenuItem>
                </Select> */}
                <TextField
                    label="Email Address"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <TextField
                    label="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </Box>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                onClick={handleSubmit}
            >
                Create Account
            </Button>
        </Container>
    )
}
